---
id: "en-php-guide-mongodb-installation"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.installation"
title: "Installation"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

## Installing the MongoDB PHP Extension with PIE

> PECL is deprecated. PHP Installer for Extensions (PIE) replaces PECL and is recommended to install extensions. Find out more at [https://github.com/php/pie](https://github.com/php/pie)

To install the MongoDB extension using PIE, run the following command:

```shell


pie install mongodb/mongodb-extension

    
```

## Installing the MongoDB PHP Extension with PECL

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [mongodb](mongodb)

Linux, Unix, and macOS users may run the following command to install the extension:

```shell


$ sudo pecl install mongodb

   
```

On systems with multiple version of PHP installed (e.g. macOS default, Homebrew), each version of PHP will have its own pecl command and php.ini file(s). Additionally, each PHP environments (e.g. CLI, web) may use separate php.ini files.

As of extension version 1.17.0, PECL will prompt for various `configure` options. To install the extension with default options in a non-interactive script, empty string input may be piped to `pecl install` using the `yes` command:

```shell


$ yes '' | sudo pecl install mongodb

   
```

A complete list of supported `configure` options can be found in the `package.xml` file included in the PECL package. To install the extension with specific `configure` options in a non-interactive script, the `--configureoptions` option for `pecl install` may be used:

```shell


$ sudo pecl install --configureoptions='with-mongodb-system-libs="yes" enable-mongodb-developer-flags="no"' mongodb

   
```

By default, installing the extension via PECL will use bundled versions of [libbson](), [libmongoc](), and [libmongocrypt]() and attempt to automatically configure them.

> If the build process fails to find an SSL library, check that the development packages (e.g. `libssl-dev`) and [pkg-config]() are both installed. If that does not resolve the problem, consider using the manual installation process.

Finally, add the following line to the php.ini file for each environment that will need to use the extension:

```ini


extension=mongodb.so

   
```

## Installing the MongoDB PHP Extension on macOS with Homebrew

[Homebrew 1.5.0]() deprecated the [Homebrew/php tap]() and removed formulae for individual PHP extensions. Going forward, macOS users are advised to install the [php]() formula and follow the standard PECL installation instructions using the pecl command provided by the Homebrew PHP installation.

Alternatively, the [shivammathur/extensions tap](https://github.com/shivammathur/homebrew-extensions) provides formulae for individual PHP extensions. For example, to install the extension for PHP 8.4, run:

```shell


$ brew install shivammathur/extensions/mongodb@8.4

   
```

Please note that only the latest extension version is available in brew.

> Install required dependencies
>
> To ensure that SSL support can be configured correctly, make sure that the `openssl` and `pkgconf` formulae are installed. If either of these packages are missing, the extension will be compiled with Secure Transport, which can lead to compatibility issues.

## Installing the MongoDB PHP Extension on Windows

Precompiled binaries are attached to the project's [Github releases](/releases/). Archives are published for various combinations of PHP version, thread safety (TS or NTS), and architecture (x86 or x64). Determining the correct archive for the PHP environment and extract the `php_mongodb.dll` file to the extension directory ("ext" by default).

Add the following line to the php.ini file for each environment that will need to use the extension:

```ini


extension=php_mongodb.dll

   
```

Failure to select the correct binary will result in an error when attempting to load the extension DLL at runtime:

```txt


PHP Warning:  PHP Startup: Unable to load dynamic library 'mongodb'

   
```

Ensure that the downloaded DLL corresponds to the following PHP runtime properties: PHP version (`PHP_VERSION`) Thread safety (`PHP_ZTS`) Architecture (`PHP_INT_SIZE`)

In addition to the aforementioned constants, these properties can also be inferred from `phpinfo()`. If a system has multiple PHP runtimes installed, double-check that the `phpinfo()` output is for the correct environment.

> Additional DLL dependencies for Windows Users
>
> In order for this extension to work, there are DLL files that must be available to the Windows system PATH. For information on how to do this, see the FAQ entitled "How do I add my PHP directory to the PATH on Windows". Although copying DLL files from the PHP folder into the Windows system directory also works (because the system directory is by default in the system's PATH), this is not recommended. *This extension requires the following files to be in the PATH:* `libsasl.dll`

## Building the MongoDB PHP Driver from source

For developers and users interested in the latest bugfixes, the extension may be compiled from the latest source code on [Github](). Run the following commands to clone and build the project:

```shell


$ git clone https://github.com/mongodb/mongo-php-driver.git
$ cd mongo-php-driver
$ git submodule update --init
$ phpize
$ ./configure
$ make all
$ sudo make install

   
```

On systems with multiple version of PHP installed (e.g. macOS default, Homebrew), each version of PHP will have its own phpize command and php.ini file(s). Additionally, each PHP environments (e.g. CLI, web) may use separate php.ini files.

By default, the extension will use bundled versions of [libbson](), [libmongoc](), and [libmongocrypt]() and attempt to configure them automatically. If these libraries are already installed as system libraries, the extension can utilize them by specifying `--with-mongodb-system-libs=yes` as an option to `configure`.

For a complete list of `configure` options, run configure --help.

When using bundled versions of libmongoc and libmongocrypt, the extension will also attempt to select an SSL library according to the `--with-mongodb-ssl` `configure` option. As of extension version 1.17.0, OpenSSL is always preferred by default. Previously, Secure Transport was the default on macOS and OpenSSL was the default on all other platforms.

> If the build process fails to find an SSL library, check that the development packages (e.g. `libssl-dev`) and [pkg-config]() are both installed.
>
> When using Homebrew on macOS, it is common for a system to have multiple versions of OpenSSL installed. To ensure that the desired version of OpenSSL is selected, the `PKG_CONFIG_PATH` environment variable may be used to control the search path for `pkg-config`.

The final build step, make install, will report where `mongodb.so` has been installed, similar to:

```txt


Installing shared extensions:     /usr/lib/php/extensions/debug-non-zts-20220829/

   
```

Ensure that the extension_dir option in php.ini points to the directory where `mongodb.so` was installed. The option may be queried by running:

```shell


$ php -i | grep extension_dir
  extension_dir => /usr/lib/php/extensions/debug-non-zts-20220829 =>
                   /usr/lib/php/extensions/debug-non-zts-20220829

   
```

If the directories differ, either change extension_dir in php.ini or manually move `mongodb.so` to the correct directory.

Finally, add the following line to the php.ini file for each environment that will need to use the extension:

```ini


extension=mongodb.so

   
```
