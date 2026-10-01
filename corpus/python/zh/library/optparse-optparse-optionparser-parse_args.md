---
id: "python-zh-function-optparse-optionparser-parse_args"
language: "python"
lang: "zh"
category: "function"
name: "OptionParser.parse_args"
signature: "OptionParser.parse_args(args=None, values=None)"
directive: "method"
module: "optparse"
source_url: "https://docs.python.org/zh-cn/3/library/optparse.html#optparse.OptionParser.parse_args"
license: "PSF"
updated: "2026-10-01"
---

# OptionParser.parse_args

解析 *args* 中的命令行选项。

输入形参为

`args`
   the list of arguments to process (default: `sys.argv[1:]`)

`values`
   a `Values` object to store option arguments in (default: a
   new instance of `Values`) -- if you give an existing object, the
   option defaults will not be initialized on it

并且返回值是一个 ``(options, args)`` 对，其中

`options`
   the same object that was passed in as *values*, or the `optparse.Values`
   instance created by `optparse`

`args`
   the leftover positional arguments after all options have been processed
