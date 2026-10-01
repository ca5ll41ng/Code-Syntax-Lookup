---
id: "python-zh-guide-unix-unix"
language: "python"
lang: "zh"
category: "guide"
name: "unix"
title: "********************************"
module: "unix"
source_url: "https://docs.python.org/zh-cn/3/using/unix.html"
license: "PSF"
updated: "2026-10-01"
---

# ********************************

.. _using-on-unix:

********************************
 Using Python on Unix platforms
********************************

**Getting and installing the latest version of Python**

**On Linux**

Python comes preinstalled on most Linux distributions, and is available as a
package on all others.  However there are certain features you might want to use
that are not available on your distro's package.  You can compile the
latest version of Python from source.

In the event that the latest version of Python doesn't come preinstalled and isn't
in the repositories as well, you can make packages for your own distro.  Have a
look at the following links:

> **Seealso**
>
> https://www.debian.org/doc/manuals/maint-guide/first.en.html
>    for Debian users
> https://en.opensuse.org/Portal:Packaging
>    for OpenSuse users
> https://docs.fedoraproject.org/en-US/package-maintainers/Packaging_Tutorial_GNU_Hello/
>    for Fedora users
> https://slackbook.org/html/package-management-making-packages.html
>    for Slackware users
>

.. _installing_idle_on_linux:

**Installing IDLE**

在某些情况下，IDLE 可能未被包括在你的 Python 安装版中。

* For Debian and Ubuntu users::

   sudo apt update
   sudo apt install idle

* For Fedora, RHEL, and CentOS users::

   sudo dnf install python3-idle

* For SUSE and OpenSUSE users::

   sudo zypper install python3-idle

* For Alpine Linux users::

   sudo apk add python3-idle

**On FreeBSD and OpenBSD**

* FreeBSD users, to add the package use::

     pkg install python3

* OpenBSD users, to add the package use::

     pkg_add -r python

     pkg_add ftp://ftp.openbsd.org/pub/OpenBSD/4.2/packages/<insert your architecture here>/python-<version>.tgz

  For example i386 users get the 2.5.1 version of Python using::

     pkg_add ftp://ftp.openbsd.org/pub/OpenBSD/4.2/packages/i386/python-2.5.1p2.tgz

.. _building-python-on-unix:

**Building Python**

> **Seealso**
>
> If you want to contribute to CPython, refer to the
> [devguide](https://devguide.python.org/getting-started/setup-building/),
> which includes build instructions and other tips on setting up environment.
>

If you want to compile CPython yourself, first thing you should do is get the
[source](https://www.python.org/downloads/source/). You can download either the
latest release's source or grab a fresh `clone
<https://devguide.python.org/setup/#get-the-source-code>`_.
You will also need to install the `build requirements`.

构建过程由常用命令组成：

   ./configure
   make
   make install

`Configuration options` and caveats for specific Unix
platforms are extensively documented in the `README.rst` file in the
root of the Python source tree.

> **Warning**
>
> `make install` can overwrite or masquerade the `python3` binary.
> `make altinstall` is therefore recommended instead of `make install`
> since it only installs `{exec_prefix}/bin/python{version}`.
>

**Python-related paths and files**

These are subject to difference depending on local installation conventions;
`prefix` and `exec_prefix`
are installation-dependent and should be interpreted as for GNU software; they
may be the same.

例如，在大多数Linux系统上，两者的默认值是 :file:`/usr` 。

+-----------------------------------------------+------------------------------------------+
 File/directory                                 Meaning                                  
+===============================================+==========================================+
 `{exec_prefix}/bin/python3`              Recommended location of the interpreter. 
+-----------------------------------------------+------------------------------------------+
 `{prefix}/lib/python{version}`,          Recommended locations of the directories 
 `{exec_prefix}/lib/python{version}`      containing the standard modules.         
+-----------------------------------------------+------------------------------------------+
 `{prefix}/include/python{version}`,      Recommended locations of the directories 
 `{exec_prefix}/include/python{version}`  containing the include files needed for  
                                                developing Python extensions and         
                                                embedding the interpreter.               
+-----------------------------------------------+------------------------------------------+

**Miscellaneous**

To easily use Python scripts on Unix, you need to make them executable,
e.g. with

```shell-session

$ chmod +x script
```

and put an appropriate Shebang line at the top of the script.  A good choice is
usually ::

   #!/usr/bin/env python3

which searches for the Python interpreter in the whole `PATH`.  However,
some Unices may not have the `env` command, so you may need to hardcode
`/usr/bin/python3` as the interpreter path.

要在Python脚本中使用shell命令，请查看 :mod:`subprocess` 模块。

.. _unix_custom_openssl:

**Custom OpenSSL**

1. To use your vendor's OpenSSL configuration and system trust store, locate
   the directory with `openssl.cnf` file or symlink in `/etc`. On most
   distribution the file is either in `/etc/ssl` or `/etc/pki/tls`. The
   directory should also contain a `cert.pem` file and/or a `certs`
   directory.

```shell-session

$ find /etc/ -name openssl.cnf -printf "%h\n"
/etc/ssl
```

2. Download, build, and install OpenSSL. Make sure you use `install_sw` and
   not `install`. The `install_sw` target does not override
   `openssl.cnf`.

```shell-session

$ curl -O https://www.openssl.org/source/openssl-VERSION.tar.gz
$ tar xzf openssl-VERSION
$ pushd openssl-VERSION
$ ./config \
    --prefix=/usr/local/custom-openssl \
    --libdir=lib \
    --openssldir=/etc/ssl
$ make -j1 depend
$ make -j8
$ make install_sw
$ popd
```

3. Build Python with custom OpenSSL
   (see the configure `--with-openssl` and `--with-openssl-rpath` options)

```shell-session

$ pushd python-3.x.x
$ ./configure -C \
    --with-openssl=/usr/local/custom-openssl \
    --with-openssl-rpath=auto \
    --prefix=/usr/local/python-3.x.x
$ make -j8
$ make altinstall
```

> **Note**
>
> Patch releases of OpenSSL have a backwards compatible ABI. You don't need
> to recompile Python to update OpenSSL. It's sufficient to replace the
> custom OpenSSL installation with a newer version.
>
