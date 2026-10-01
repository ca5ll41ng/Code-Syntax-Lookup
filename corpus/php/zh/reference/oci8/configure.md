---
id: "zh-php-guide-oci8-installation"
language: "php"
lang: "zh"
category: "guide"
name: "oci8.installation"
title: "安装"
module: "oci8"
source_url: "https://www.php.net/manual/zh/oci8.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

## 使用 OCI8 配置 PHP

在配置 OCI8 之前查看前面的要求部分。

在启动 Web 服务器之前，OCI8 通常需要几个 Oracle 环境变量（见下文）来定位库、指向配置文件并设置一些基本属性，例如 Oracle 库使用的字符集。必须在 PHP 进程启动*之前*设置变量。

PHP 二进制文件必须链接到与其配置时相同或更高的主要 Oracle 库版本。例如，如果使用 Oracle 19 库编译 OCI8，那么 PHP 也应该使用 Oracle 19 库部署和运行。PHP 应用程序可以连接到其他版本的 Oracle 数据库，因为 Oracle 具有客户端-服务器跨版本兼容性。

## 使用 pecl 命令从 PECL 安装 OCI8

可以使用 [PECL](oci8) 存储库将 OCI8 扩展添加到已安装的现有 PHP 中。

- 如果在防火墙的后面，设置 PEAR 代理，例如： ```text pear config-set http_proxy http://my-proxy.example.com:80/ ```
- 运行 ```text pecl install oci8 ``` 对于 PHP 7，使用 `pecl install oci8-2.2.0`
- 出现提示时，输入 `$ORACLE_HOME` 的值或 `instantclient,/path/to/instant/client/lib`。 注意：不要输入 `$ORACLE_HOME` 或 `$HOME` 之类的变量名，因为 `pecl` 不会展开它们。反而应该输入展开后的路径，例如 `/opt/oracle/product/19c/dbhome_1` 或 `instantclient,/Users/myname/Downloads/instantclient_19_8`
- 如果收到错误 `oci8_dtrace_gen.h: No such file or directory`，这意味着 PHP 是在启用 DTrace 动态跟踪的情况下编译的。使用如下安装： ```text $ export PHP_DTRACE=yes $ pecl install oci8 ```
- 编辑 php.ini 文件并添加以下行： ```text extension=oci8.so ``` 确保 php.ini 指令 extension_dir 设置为安装 `oci8.so` 的目录。

## 使用 phpize 从 PECL 安装 OCI8

要在无法使用 `pecl` 命令时在已安装的现有 PHP 上安装 OCI8，请手动下载 [PECL](oci8) OCI8 包，例如 `oci8-3.0.0.tgz`。

- 解压包： ```text tar -zxf oci8-3.0.0.tgz cd oci8-3.0.0 ```
- 预处理包： ```text phpize ```
- 使用 `$ORACLE_HOME` 或 Instant Client 配置包 ```text ./configure -with-oci8=shared,$ORACLE_HOME ``` 或 ```text ./configure -with-oci8=shared,instantclient,/path/to/instant/client/lib ```
- 安装包： ```text make install ```
- 如果收到错误 `oci8_dtrace_gen.h: No such file or directory`，这意味着 PHP 是在启用 DTrace 动态跟踪的情况下编译的。设置此环境变量后重新运行 `configure` 和 `make` 命令： ```text $ export PHP_DTRACE=yes ```
- 编辑 php.ini 文件并添加以下行： ```text extension=oci8.so ``` 确保 php.ini 指令 extension_dir 设置为安装 `oci8.so` 的目录。

## 编译 PHP 时将 OCI8 作为共享扩展安装

如果从源代码编译 PHP，则可以使用 `shared` 配置选项将 OCI8 编译为共享库，可以动态加载到 PHP。编译共享扩展可以轻松升级 OCI8 ，而不会影响 PHP 的其它部分。

使用以下任一配置选项配置 OCI8。

- 如果使用免费的 [Oracle Instant Client]() 库，则执行以下操作： ```text ./configure --with-oci8=shared,instantclient,/path/to/instant/client/lib ``` 如果 Instant Client 12.2（或更早版本）是从 ZIP 文件安装的，请首先确保创建库符号链接，例如 `ln -s libclntsh.so.12.1 libclntsh.so`。 如果使用基于 RPM 的 Oracle Instant Client 安装，配置行将如下所示： ```text ./configure --with-oci8=shared,instantclient,/usr/lib/oracle/<version>/client/lib ``` 例如：--with-oci8=shared,instantclient,/usr/lib/oracle/19.9/client/lib
- 如果使用 Oracle 数据库或完整的 Oracle 客户端安装，则执行以下操作： ```text ./configure --with-oci8=shared,$ORACLE_HOME ``` 确保 Web 服务器用户（`nobody`、`www`）可以访问 `$ORACLE_HOME` 目录下的库、初始化文件和 `tnsnames.ora`（如果使用）。对于 Oracle 10*g*R2，可能需要运行 `$ORACLE_HOME/install/changePerm.sh` 实用程序来授予目录访问权限。

配置后，遵循通用的 PHP 编译过程，例如 *make install*。将创建 OCI8 共享扩展 `oci8.so` 库。可能需要手动移动到 PHP 扩展目录，由 php.ini 文件中的 extension_dir 选项指定。

要完成 OCI8 的安装，请编辑 php.ini 并添加以下行：

```text extension=oci8.so ```

## 编译 PHP 时将 OCI8 作为静态编译扩展安装

如果从源代码编译 PHP，则可以使用以下任一配置选项，配置 PHP 为包含 OCI8 静态扩展的 PHP。

- 如果使用 Oracle Instant Client，则执行以下操作： ```text ./configure --with-oci8=instantclient,/path/to/instant/client/lib ```
- 如果使用 Oracle 数据库或完整的 Oracle 客户端安装，则执行以下操作： ```text ./configure --with-oci8=$ORACLE_HOME ```

配置后，遵循通用的 PHP 编译过程，例如 *make install*。编译成功后，不需要在 php.ini 中加入 `oci8.so`。不需要额外的编译步骤。

## 在 Windows 上安装 OCI8

通过使用 [PECL](oci8) 存储库或函数库（library）中的 DLL，在已安装 PHP 的 `ext` 中，将 OCI8 扩展添加到现有的 PHP 安装中。

对于 Oracle 12*c*（或更高版本）的库，取消注释其中 php.ini 行 `extension=php_oci8_12c.dll` 或 `extension=php_oci8_11g.dll` 或 `extension=php_oci8.dll` 中的一个。一次只能启用这些 DLL 中的一个。更高版本的 DLL 可能包含更多功能。并非所有 DLL 都适用于所有版本的 PHP。确保将 extension_dir 设置为包含 PHP 扩展 DLL 的目录。

如果使用 Instant Client，请将系统 PATH 环境变量设置为 Oracle 库目录。

## 设置 Oracle 环境

在使用此扩展之前，请确保为 Web 守护程序用户正确设置了 Oracle 环境变量。 如果 Web 服务器在启动时自动启动，请确保启动时环境也已正确配置。

> 不要在 PHP 脚本中使用 `putenv()` 设置 Oracle 环境变量，因为 Oracle 库可能会在脚本运行之前加载和初始化。使用 `putenv()` 设置的变量可能会导致冲突、崩溃或不可预知的行为。有些函数可能有效，但其它函数可能会出现细微的错误。应在启动 Web 服务器*之前*设置变量。

在 Red Hat Linux 及其变体上，在 `/etc/sysconfig/httpd` 末尾导出变量。其他带有 Apache 2 的系统可能会使用 Apache `bin` 目录中的 `envvars` 脚本。 A third option, the Apache `SetEnv` directive in `httpd.conf`, may work in some systems but is known to be insufficient in others.

要检查环境变量是否设置正确，请使用 `phpinfo()` 并检查 *Environment*（不是 *Apache Environment*）部分是否包含预期变量。

可能需要的变量包含在下表中。有关所有可用变量的更多信息，请参阅 Oracle 文档。

| Name | Purpose |
| --- | --- |
| ORACLE_HOME | 包含完整 Oracle 数据库软件的目录。使用 Oracle Instant Client 时不要设置它，因为它是不必要的并且可能会导致安装问题。 |
| ORACLE_SID | 包含要连接到的本地计算机上的数据库的名称。如果使用 Oracle Instant Client 或始终将连接参数传递给 `oci_connect()` 时，则无需设置此项。 |
| LD_LIBRARY_PATH | 将其（或其平台等效项，例如 `LIBPATH` 或 `SHLIB_PATH`）设置为 Oracle 库的位置，例如 `$ORACLE_HOME/lib` 或 `/usr/lib/oracle/18.5/client/lib`。请注意，对于 Linux 上的 Instant Client ZIP 文件，使用 `ldconfig` 更可靠，请参阅 Instant Client 安装说明。对于 Instant Client 19（或更高版本）RPM 文件，`ldconfig` 会自动运行。有些用户使用 `LD_PRELOAD` 而不是 `LD_LIBRARY_PATH`。 |
| NLS_LANG | 这是设置 Oracle 库使用的字符集和国际化信息的主要变量。 |
| ORA_SDTZ | 设置 Oracle 会话时区。 |
| TNS_ADMIN | Contains the directory where the Oracle Net Services configuration files such as `tnsnames.ora` and `sqlnet.ora` are kept. Not needed if the `oci_connect()` connection string uses the Easy Connect naming syntax such as `localhost/XE`. Not needed if the network configuration files are in one of the default locations such as `/usr/lib/oracle/VERSION/client/lib/network/admin`, `$ORACLE_HOME/network/admin` or `/etc`. |

不太常用的 Oracle 环境变量包括 `TWO_TASK`、`ORA_TZFILE` 和各种 Oracle 全局设置，如 `NLS*` 和 `ORA_NLS_*` 变量。

## 故障排除

安装 OCI8 最常见的问题是没有正确设置 Oracle 环境。这通常表现为使用 `oci_connect()` 或 `oci_pconnect()` 的问题。该错误可能是 PHP 错误，例如 *Call to undefined function oci_connect()*，Oracle 错误（例如 ORA-12705），甚至是 Apache 崩溃。检查 Apache 日志文件中的启动错误，并查看以上部分以解决此问题。

虽然 ORA-12154 或 ORA-12514 等网络错误表示是 Oracle 网络命名或配置问题，但根本原因可能是因为 PHP 环境设置不正确，Oracle 库无法找到 `tnsnames.ora` 配置文件。

在 Windows 上，在一台机器上安装多个版本的 Oracle 很容易导致库冲突，除非注意确保 PHP 只使用正确版本的 Oracle。

用于检查查找和加载哪些库的实用程序可以帮助解决库丢失或冲突问题，尤其是在 Windows 上。

> 如果 Web 服务器未启动或在启动时崩溃
>
> 检查 Apache 是否与 pthread 库链接：
>
> ```text # ldd /www/apache/bin/httpd libpthread.so.0 => /lib/libpthread.so.0 (0x4001c000) libm.so.6 => /lib/libm.so.6 (0x4002f000) libcrypt.so.1 => /lib/libcrypt.so.1 (0x4004c000) libdl.so.2 => /lib/libdl.so.2 (0x4007a000) libc.so.6 => /lib/libc.so.6 (0x4007e000) /lib/ld-linux.so.2 => /lib/ld-linux.so.2 (0x40000000) ```
>
> 如果未列出 libpthread，则需要重新安装 Apache：
>
> ```text # cd /usr/src/apache_1.3.xx # make clean # LIBS=-lpthread ./config.status # make # make install ```
>
> 请注意，在某些系统（如 UnixWare）上，它是 libthread 而不是 libpthread PHP 和 Apache 必须配置 EXTRA_LIBS=-lthread。
