---
id: "python-zh-function-optparse-option-dest"
language: "python"
lang: "zh"
category: "function"
name: "Option.dest"
directive: "attribute"
module: "optparse"
source_url: "https://docs.python.org/zh-cn/3/library/optparse.html#optparse.Option.dest"
license: "PSF"
updated: "2026-10-01"
---

# Option.dest

(默认: 获取自选项字符串)

If the option's action implies writing or modifying a value somewhere, this
tells `optparse` where to write it: `~Option.dest` names an
attribute of the `options` object that `optparse` builds as it parses
the command line.
