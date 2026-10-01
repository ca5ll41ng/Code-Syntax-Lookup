---
id: "python-zh-function-tokenize-tokenize"
language: "python"
lang: "zh"
category: "function"
name: "tokenize"
title: "Command-line usage"
directive: "module"
module: "tokenize"
source_url: "https://docs.python.org/zh-cn/3/library/tokenize.html#module-tokenize"
license: "PSF"
updated: "2026-10-01"
---

# Command-line usage

.. _tokenize-cli:

**Command-line usage**

> *Added in 3.3*

The `tokenize` module can be executed as a script from the command line.
It is as simple as:

```sh

python -m tokenize [-e] [filename.py]
```

可以接受以下选项：

program:: tokenize

option:: -h, --help

option:: -e, --exact

If `filename.py` is specified its contents are tokenized to stdout.
Otherwise, tokenization is performed on stdin.

> *Added in 3.15*: Output is in color by default and can be :ref:`controlled using environment variables <using-on-controlling-color>`.

**Examples**

Example of a script rewriter that transforms float literals into Decimal
objects::

    from tokenize import tokenize, untokenize, NUMBER, STRING, NAME, OP
    from io import BytesIO

    def decistmt(s):
        """Substitute Decimals for floats in a string of statements.

        >>> from decimal import Decimal
        >>> s = 'print(+21.3e-5*-.1234/81.7)'
        >>> decistmt(s)
        "print (+Decimal ('21.3e-5')*-Decimal ('.1234')/Decimal ('81.7'))"

        The format of the exponent is inherited from the platform C library.
        Known cases are "e-007" (Windows) and "e-07" (not Windows).  Since
        we're only showing 12 digits, and the 13th isn't close to 5, the
        rest of the output should be platform-independent.

        >>> exec(s)  #doctest: +ELLIPSIS
        -3.21716034272e-0...7

        Output from calculations with Decimal should be identical across all
        platforms.

        >>> exec(decistmt(s))
        -3.217160342717258261933904529E-7
        """
        result = []
        g = tokenize(BytesIO(s.encode('utf-8')).readline)  # tokenize the string
        for toknum, tokval, _, _, _ in g:
            if toknum == NUMBER and '.' in tokval:  # replace NUMBER tokens
                result.extend([
                    (NAME, 'Decimal'),
                    (OP, '('),
                    (STRING, repr(tokval)),
                    (OP, ')')
                ])
            else:
                result.append((toknum, tokval))
        return untokenize(result).decode('utf-8')

从命令行进行标记化的例子。 脚本::

    def say_hello():
        print("Hello, World!")

    say_hello()

will be tokenized to the following output where the first column is the range
of the line/column coordinates where the token is found, the second column is
the name of the token, and the final column is the value of the token (if any):

```shell-session

$ python -m tokenize hello.py
0,0-0,0:            ENCODING       'utf-8'
1,0-1,3:            NAME           'def'
1,4-1,13:           NAME           'say_hello'
1,13-1,14:          OP             '('
1,14-1,15:          OP             ')'
1,15-1,16:          OP             ':'
1,16-1,17:          NEWLINE        '\n'
2,0-2,4:            INDENT         '    '
2,4-2,9:            NAME           'print'
2,9-2,10:           OP             '('
2,10-2,25:          STRING         '"Hello, World!"'
2,25-2,26:          OP             ')'
2,26-2,27:          NEWLINE        '\n'
3,0-3,1:            NL             '\n'
4,0-4,0:            DEDENT         ''
4,0-4,9:            NAME           'say_hello'
4,9-4,10:           OP             '('
4,10-4,11:          OP             ')'
4,11-4,12:          NEWLINE        '\n'
5,0-5,0:            ENDMARKER      ''
```

可以使用 :option:`-e` 选项来显示确切的标记类型名称。

```shell-session

$ python -m tokenize -e hello.py
0,0-0,0:            ENCODING       'utf-8'
1,0-1,3:            NAME           'def'
1,4-1,13:           NAME           'say_hello'
1,13-1,14:          LPAR           '('
1,14-1,15:          RPAR           ')'
1,15-1,16:          COLON          ':'
1,16-1,17:          NEWLINE        '\n'
2,0-2,4:            INDENT         '    '
2,4-2,9:            NAME           'print'
2,9-2,10:           LPAR           '('
2,10-2,25:          STRING         '"Hello, World!"'
2,25-2,26:          RPAR           ')'
2,26-2,27:          NEWLINE        '\n'
3,0-3,1:            NL             '\n'
4,0-4,0:            DEDENT         ''
4,0-4,9:            NAME           'say_hello'
4,9-4,10:           LPAR           '('
4,10-4,11:          RPAR           ')'
4,11-4,12:          NEWLINE        '\n'
5,0-5,0:            ENDMARKER      ''
```

Example of tokenizing a file programmatically, reading unicode
strings instead of bytes with `generate_tokens`::

    import tokenize

    with tokenize.open('hello.py') as f:
        tokens = tokenize.generate_tokens(f.readline)
        for token in tokens:
            print(token)

或者通过 :func:`.tokenize` 直接读取字节数据::

    import tokenize

    with open('hello.py', 'rb') as f:
        tokens = tokenize.tokenize(f.readline)
        for token in tokens:
            print(token)
