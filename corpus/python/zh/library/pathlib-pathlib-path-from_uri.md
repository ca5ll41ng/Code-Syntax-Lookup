---
id: "python-zh-function-pathlib-path-from_uri"
language: "python"
lang: "zh"
category: "function"
name: "Path.from_uri"
signature: "Path.from_uri(uri)"
directive: "classmethod"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.from_uri"
license: "PSF"
updated: "2026-10-01"
---

# Path.from_uri

通过解析一个 '文件' URI 来返回新的路径对象。 例如::

   >>> p = Path.from_uri('file:///etc/hosts')
   PosixPath('/etc/hosts')

在 Windows 上，可以基于 URI 来解析 DOS 设备和 UNC 路径::

   >>> p = Path.from_uri('file:///c:/windows')
   WindowsPath('c:/windows')
   >>> p = Path.from_uri('file://server/share')
   WindowsPath('//server/share')

某些变化形式也是受支持的::

   >>> p = Path.from_uri('file:////server/share')
   WindowsPath('//server/share')
   >>> p = Path.from_uri('file://///server/share')
   WindowsPath('//server/share')
   >>> p = Path.from_uri('file:c:/windows')
   WindowsPath('c:/windows')
   >>> p = Path.from_uri('file:/c|/windows')
   WindowsPath('c:/windows')

`ValueError` is raised if the URI does not start with `file:`, or
the parsed path isn't absolute.

> *Added in 3.13*

> *Changed in 3.14*: The URL authority is discarded if it matches the local hostname. Otherwise, if the authority isn't empty or ``localhost``, then on Windows a UNC path is returned (as before), and on other platforms a :exc:`ValueError` is raised.
