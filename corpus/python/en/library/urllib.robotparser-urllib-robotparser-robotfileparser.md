---
id: "python-en-function-urllib-robotparser-robotfileparser"
language: "python"
lang: "en"
category: "function"
name: "RobotFileParser"
signature: "RobotFileParser(url='')"
directive: "class"
module: "urllib.robotparser"
source_url: "https://docs.python.org/3/library/urllib.robotparser.html#urllib.robotparser.RobotFileParser"
license: "PSF"
updated: "2026-10-01"
---

# RobotFileParser

This class provides methods to read, parse and answer questions about the
`robots.txt` file at *url* or a `urllib.request.Request` object.

> *Changed in next*: *url* parameter can be a :class:`urllib.request.Request` object.

method:: set_url(url)

method:: read()

method:: parse(lines)

method:: can_fetch(useragent, url)

method:: mtime()

method:: modified()

method:: crawl_delay(useragent)

method:: request_rate(useragent)

method:: site_maps()
