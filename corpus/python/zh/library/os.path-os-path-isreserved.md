---
id: "python-zh-function-os-path-isreserved"
language: "python"
lang: "zh"
category: "function"
name: "isreserved"
signature: "isreserved(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/zh-cn/3/library/os.path.html#os.path.isreserved"
license: "PSF"
updated: "2026-10-01"
---

# isreserved

如果 *path* 为当前系统的保留路径名则返回 ``True``。

On Windows, reserved filenames include those that end with a space or dot;
those that contain colons (i.e. file streams such as "name:stream"),
wildcard characters (i.e. `'*?"<>'`), pipe, or ASCII control characters;
as well as DOS device names such as "NUL", "CON", "CONIN$", "CONOUT$",
"AUX", "PRN", "COM1", and "LPT1".

> **Note**
>
> This function approximates rules for reserved paths on most Windows
> systems. These rules change over time in various Windows releases.
> This function may be updated in future Python releases as changes to
> the rules become broadly available.
>

availability:: Windows.

> *Added in 3.13*
