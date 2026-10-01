---
id: "python-zh-function-importlib-metadata-distribution"
language: "python"
lang: "zh"
category: "function"
name: "Distribution"
directive: "class"
module: "importlib.metadata"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.metadata.html#importlib.metadata.Distribution"
license: "PSF"
updated: "2026-10-01"
---

# Distribution

一个已安装分发包的详情。

Note: different `Distribution` instances do not currently compare
equal, even if they relate to the same installed distribution and
accordingly have the same attributes.

staticmethod:: at(path)

classmethod:: from_name(name)

classmethod:: discover(*, context=None, **kwargs)

attribute:: metadata

attribute:: name

attribute:: requires

attribute:: version

attribute:: origin

attribute:: entry_points

attribute:: files

The following two abstract methods need to be implemented when implementing-custom-providers_:

method:: locate_file(path)

method:: read_text(filename)
