---
id: "python-zh-function-typing-readonly"
language: "python"
lang: "zh"
category: "function"
name: "ReadOnly"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.ReadOnly"
license: "PSF"
updated: "2026-10-01"
---

# ReadOnly

一个特殊的类型标注构造，用于将 :class:`TypedDict` 的项标记为只读。

例如：

   class Movie(TypedDict):
      title: ReadOnly[str]
      year: int

   def mutate_movie(m: Movie) -> None:
      m["year"] = 1999  # allowed
      m["title"] = "The Matrix"  # type checker error

这个属性没有运行时检查。

详见 :class:`TypedDict` 和 :pep:`705`。

> *Added in 3.13*
