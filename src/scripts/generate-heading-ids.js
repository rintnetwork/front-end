const fs = require("fs")
const GitHubSlugger = require("github-slugger")

// Given a directory (e.g. `pt`), this script adds custom heading IDs
// within all markdown files of the directory (only if one does not exist).
// e.g.
// ## What makes ethereum dapps different?
// becomes:
// ## What makes ethereum dapps different? {#what-makes-ethereum-dapps-different}

// This keeps anchor links for headers (e.g. used in <TableOfContents/>) consistent across translations
// Learn more: https://github.com/ethereum/ethereum-org-website/issues/272

// TODO we should auto-run this script when new markdown files are added to the project

const toc = {}
let curLevel = [0, 0, 0]

const walk = (dir, doc) => {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = dir + "/" + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      // Recurse into a subdirectory
      results = results.concat(walk(file, doc))
    } else {
      // Is a file
      if (
        !doc ||
        doc.length == 0 ||
        (file.indexOf(doc) != -1 && !file.startsWith(`src/content/${doc}`))
      ) {
        results.push(file)
      }
    }
  })
  return results
}

const stripLinks = (line) => {
  return line.replace(/\[([^\]]+)\]\([^)]+\)/, (match, p1) => p1)
}

const addHeaderID = (line, slugger, write = false) => {
  // check if we're a header at all
  if (!line.startsWith("#")) {
    return line
  }
  // check if it already has an id
  if (/\{#[^}]+\}/.test(line)) {
    return line
  }
  const headingText = line
    .slice(line.indexOf(" "))
    .replace(/\{#[^}]+\}/, "")
    .trim()
  const headingLevel = line.slice(0, line.indexOf(" "))
  curLevel[headingLevel.length - 1]++
  for (let l = headingLevel.length; l < 3; l++) {
    curLevel[l] = 0
  }
  const headerNumber = curLevel.join(".")
  let slug = null
  if (!write) {
    // const match = /^.+(\s*\{#([A-Za-z0-9\-_]+?)\}\s*)$/.exec(line);
    // slug = match ? match[2].toLowerCase() : slugger.slug(stripLinks(headingText));
    slug = slugger.slug(stripLinks(headingText))
    toc[headerNumber] = {
      text: headingText,
      slug,
    }
    // The below code is for printing the anchor link reference
    // const title = headingText.replace(/^\d\.\s+/, '').trim()
    // if (curLevel[1] > 0)
    // console.log(`  ${curLevel[1]}. [${title}](#${slug})`);
  } else {
    if (headerNumber in toc) {
      slug = toc[headerNumber].slug
      console.log("\twrite heading ID", headerNumber, headingText, "==>", slug)
      return `${headingLevel} ${headingText} {#${slug}}`
    } else {
      console.log(
        "\theaderNumber not found",
        headerNumber,
        headingText,
        "==>",
        slug
      )
      return line
    }
  }
}

const addHeaderIDs = (lines, write = false) => {
  // Sluggers should be per file
  const slugger = new GitHubSlugger()
  let inCode = false
  const results = []
  lines.forEach((line) => {
    // Ignore code blocks
    if (line.startsWith("```")) {
      inCode = !inCode
      results.push(line)
      return
    }
    if (inCode) {
      results.push(line)
      return
    }

    results.push(addHeaderID(line, slugger, write))
  })
  return results
}

const traverseHeaders = (path, doc = "", write = false) => {
  const files = walk(path, doc)
  files.forEach((file) => {
    if (!file.endsWith(".md")) {
      return
    }

    console.log(`>>> processing ${file}`)
    curLevel = [0, 0, 0]
    const content = fs.readFileSync(file, "utf8")
    const lines = content.split("\n")
    const updatedLines = addHeaderIDs(lines, write)
    if (write) {
      fs.writeFileSync(file, updatedLines.join("\n"))
    }
  })
  if (!write) {
    console.log(toc)
  }
}

const addHeaderIDsForDir = (path) => {
  if (path.includes("translations")) {
    throw new Error(`Heading ID generation is intended for English files only.`)
  }
  const fullPath = `src/content/${path}`
  traverseHeaders(fullPath, null, false)
  traverseHeaders(fullPath, null, true)
}

const [path] = process.argv.slice(2)

addHeaderIDsForDir(path)
