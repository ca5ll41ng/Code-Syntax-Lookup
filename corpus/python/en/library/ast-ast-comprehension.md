---
id: "python-en-function-ast-comprehension"
language: "python"
lang: "en"
category: "function"
name: "comprehension"
signature: "comprehension(target, iter, ifs, is_async)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.comprehension"
license: "PSF"
updated: "2026-10-01"
---

# comprehension

One `for` clause in a comprehension. `target` is the reference to use for
each element - typically a `Name` or `Tuple` node. `iter`
is the object to iterate over. `ifs` is a list of test expressions: each
`for` clause can have multiple `ifs`.

`is_async` indicates a comprehension is asynchronous (using an
`async for` instead of `for`). The value is an integer (0 or 1).

```python

>>> print(ast.dump(ast.parse('[ord(c) for line in file for c in line]', mode='eval'),
...                indent=4)) # Multiple comprehensions in one.
Expression(
    body=ListComp(
        elt=Call(
            func=Name(id='ord'),
            args=[
                Name(id='c')]),
        generators=[
            comprehension(
                target=Name(id='line', ctx=Store()),
                iter=Name(id='file'),
                is_async=0),
            comprehension(
                target=Name(id='c', ctx=Store()),
                iter=Name(id='line'),
                is_async=0)]))

>>> print(ast.dump(ast.parse('(n**2 for n in it if n>5 if n<10)', mode='eval'),
...                indent=4)) # generator comprehension
Expression(
    body=GeneratorExp(
        elt=BinOp(
            left=Name(id='n'),
            op=Pow(),
            right=Constant(value=2)),
        generators=[
            comprehension(
                target=Name(id='n', ctx=Store()),
                iter=Name(id='it'),
                ifs=[
                    Compare(
                        left=Name(id='n'),
                        ops=[
                            Gt()],
                        comparators=[
                            Constant(value=5)]),
                    Compare(
                        left=Name(id='n'),
                        ops=[
                            Lt()],
                        comparators=[
                            Constant(value=10)])],
                is_async=0)]))

>>> print(ast.dump(ast.parse('[i async for i in soc]', mode='eval'),
...                indent=4)) # Async comprehension
Expression(
    body=ListComp(
        elt=Name(id='i'),
        generators=[
            comprehension(
                target=Name(id='i', ctx=Store()),
                iter=Name(id='soc'),
                is_async=1)]))
```
