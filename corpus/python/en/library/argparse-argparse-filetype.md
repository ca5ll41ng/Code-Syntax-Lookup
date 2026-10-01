---
id: "python-en-function-argparse-filetype"
language: "python"
lang: "en"
category: "function"
name: "FileType"
signature: "FileType(mode='r', bufsize=-1, encoding=None, errors=None)"
directive: "class"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.FileType"
license: "PSF"
updated: "2026-10-01"
---

# FileType

The `FileType` factory creates objects that can be passed to the type
argument of `ArgumentParser.add_argument`.  Arguments that have
`FileType` objects as their type will open command-line arguments as
files with the requested modes, buffer sizes, encodings and error handling
(see the `open` function for more details)::

   >>> parser = argparse.ArgumentParser()
   >>> parser.add_argument('--raw', type=argparse.FileType('wb', 0))
   >>> parser.add_argument('out', type=argparse.FileType('w', encoding='UTF-8'))
   >>> parser.parse_args(['--raw', 'raw.dat', 'file.txt'])
   Namespace(out=<_io.TextIOWrapper name='file.txt' mode='w' encoding='UTF-8'>, raw=<_io.FileIO name='raw.dat' mode='wb'>)

FileType objects understand the pseudo-argument `'-'` and automatically
convert this into `sys.stdin` for readable `FileType` objects and
`sys.stdout` for writable `FileType` objects::

   >>> parser = argparse.ArgumentParser()
   >>> parser.add_argument('infile', type=argparse.FileType('r'))
   >>> parser.parse_args(['-'])
   Namespace(infile=<_io.TextIOWrapper name='<stdin>' encoding='UTF-8'>)

> **Note**
>
> If one argument uses *FileType* and then a subsequent argument fails,
> an error is reported but the file is not automatically closed.
> This can also clobber the output files.
> In this case, it would be better to wait until after the parser has
> run and then use the `with`-statement to manage the files.
>

> *Changed in 3.4*: Added the *encoding* and *errors* parameters.

> *Deprecated since 3.14*
