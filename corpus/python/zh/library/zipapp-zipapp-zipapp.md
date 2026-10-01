---
id: "python-zh-function-zipapp-zipapp"
language: "python"
lang: "zh"
category: "function"
name: "zipapp"
title: "Examples"
directive: "module"
module: "zipapp"
source_url: "https://docs.python.org/zh-cn/3/library/zipapp.html#module-zipapp"
license: "PSF"
updated: "2026-10-01"
---

# Examples

.. _zipapp-examples:

**Examples**

将目录打包成一个文件并运行它。

```shell-session

$ python -m zipapp myapp
$ python myapp.pyz
<output from myapp>
```

同样还可用 :func:`create_archive` 函数完成：

   >>> import zipapp
   >>> zipapp.create_archive('myapp', 'myapp.pyz')

To make the application directly executable on POSIX, specify an interpreter
to use.

```shell-session

$ python -m zipapp myapp -p "/usr/bin/env python"
$ ./myapp.pyz
<output from myapp>
```

To replace the shebang line on an existing archive, create a modified archive
using the `create_archive` function::

   >>> import zipapp
   >>> zipapp.create_archive('old_archive.pyz', 'new_archive.pyz', '/usr/bin/python3')

To update the file in place, do the replacement in memory using a `~io.BytesIO`
object, and then overwrite the source afterwards.  Note that there is a risk
when overwriting a file in place that an error will result in the loss of
the original file.  This code does not protect against such errors, but
production code should do so.  Also, this method will only work if the archive
fits in memory::

   >>> import zipapp
   >>> import io
   >>> temp = io.BytesIO()
   >>> zipapp.create_archive('myapp.pyz', temp, '/usr/bin/python2')
   >>> with open('myapp.pyz', 'wb') as f:
   >>>     f.write(temp.getvalue())

.. _zipapp-specifying-the-interpreter:

**Specifying the Interpreter**

Note that if you specify an interpreter and then distribute your application
archive, you need to ensure that the interpreter used is portable.  The Python
launcher for Windows supports most common forms of POSIX `#!` line, but there
are other issues to consider:

* If you use "/usr/bin/env python" (or other forms of the "python" command,
  such as "/usr/bin/python"), you need to consider that your users may have
  either Python 2 or Python 3 as their default, and write your code to work
  under both versions.
* If you use an explicit version, for example "/usr/bin/env python3" your
  application will not work for users who do not have that version.  (This
  may be what you want if you have not made your code Python 2 compatible).
* There is no way to say "python X.Y or later", so be careful of using an
  exact version like "/usr/bin/env python3.4" as you will need to change your
  shebang line for users of Python 3.5, for example.

Typically, you should use an "/usr/bin/env python2" or "/usr/bin/env python3",
depending on whether your code is written for Python 2 or 3.

**Creating Standalone Applications with zipapp**

Using the `zipapp` module, it is possible to create self-contained Python
programs, which can be distributed to end users who only need to have a
suitable version of Python installed on their system.  The key to doing this
is to bundle all of the application's dependencies into the archive, along
with the application code.

创建独立运行打包文件的步骤如下：

1. Create your application in a directory as normal, so you have a `myapp`
   directory containing a `__main__.py` file, and any supporting application
   code.

2. Install all of your application's dependencies into the `myapp` directory,
   using pip:

```shell-session

$ python -m pip install -r requirements.txt --target myapp
```

   (this assumes you have your project requirements in a `requirements.txt`
   file - if not, you can just list the dependencies manually on the pip command
   line).

3. Package the application using:

```shell-session

$ python -m zipapp -p "interpreter" myapp
```

This will produce a standalone executable, which can be run on any machine with
the appropriate interpreter available. See `zipapp-specifying-the-interpreter`
for details. It can be shipped to users as a single file.

On Unix, the `myapp.pyz` file is executable as it stands.  You can rename the
file to remove the `.pyz` extension if you prefer a "plain" command name.  On
Windows, the `myapp.pyz[w]` file is executable by virtue of the fact that
the Python interpreter registers the `.pyz` and `.pyzw` file extensions
when installed.

**Caveats**

If your application depends on a package that includes a C extension, that
package cannot be run from a zip file (this is an OS limitation, as executable
code must be present in the filesystem for the OS loader to load it). In this
case, you can exclude that dependency from the zipfile, and either require
your users to have it installed, or ship it alongside your zipfile and add code
to your `__main__.py` to include the directory containing the unzipped
module in `sys.path`. In this case, you will need to make sure to ship
appropriate binaries for your target architecture(s) (and potentially pick the
correct version to add to `sys.path` at runtime, based on the user's machine).

**The Python Zip Application Archive Format**

Python has been able to execute zip files which contain a `__main__.py` file
since version 2.6.  In order to be executed by Python, an application archive
simply has to be a standard zip file containing a `__main__.py` file which
will be run as the entry point for the application.  As usual for any Python
script, the parent of the script (in this case the zip file) will be placed on
`sys.path` and thus further modules can be imported from the zip file.

The zip file format allows arbitrary data to be prepended to a zip file.  The
zip application format uses this ability to prepend a standard POSIX "shebang"
line to the file (`#!/path/to/interpreter`).

因此，Python zip 应用程序的格式会如下所示：

1. An optional shebang line, containing the characters `b'#!'` followed by an
   interpreter name, and then a newline (`b'\n'`) character.  The interpreter
   name can be anything acceptable to the OS "shebang" processing, or the Python
   launcher on Windows.  The interpreter should be encoded in UTF-8 on Windows,
   and in `sys.getfilesystemencoding` on POSIX.
2. Standard zipfile data, as generated by the `zipfile` module.  The
   zipfile content *must* include a file called `__main__.py` (which must be
   in the "root" of the zipfile - i.e., it cannot be in a subdirectory).  The
   zipfile data can be compressed or uncompressed.

If an application archive has a shebang line, it may have the executable bit set
on POSIX systems, to allow it to be executed directly.

There is no requirement that the tools in this module are used to create
application archives - the module is a convenience, but archives in the above
format created by any means are acceptable to Python.
