---
id: "zh-php-guide-fann-setup"
language: "php"
lang: "zh"
category: "guide"
name: "fann.setup"
title: "安装/配置"
module: "fann"
source_url: "https://www.php.net/manual/zh/fann.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

PHP >= 5.2.0 and libfann >= 2.1.0

## 安装

FANN PHP 扩展在所有的 Linux 系统都可以运行的。

  `fann.installation.lib`   `fann.installation.pecl`   `fann.installation.manual`  

## FANN 库安装

在安装扩展之前确认 *libfann* 库已经安装在系统上了。在大部分的 Linux 发行版本的源中都包含了这个库（搜索 *fann*）。需要安装开发版本。

如果 libfann 没安装，需要先安装它。可以从[官方网站]()或者系统自带源中下载。比如在 Fedora 系统中：

```text



$ sudo yum install fann-devel


    
```

或者 Ubuntu 系统中：

```text



$ sudo apt-get install libfann-dev


    
```

如果该库被手动重装，在安装之前所有的老版本库文件应该先被删除，否则老版本的库还是会被连接。

## PECL 安装

在 PECL 库里这个扩展是可用的。 安装起来也很容易。只要运行：

```text



$ sudo pecl install fann


    
```

## 手动安装

如果开发者和用户对最新的更改很感兴趣，可以编译 [Github]() 上最新的源代码。 前往 Github 点击 "Download ZIP" 按钮，然后运行:

```text



$ unzip php-fann-master.zip
$ cd php-fann-master
$ phpize
$ ./configure
$ make all
$ sudo make install


    
```

在 php.ini 配置文件中做如下更改:

- 确认 *extension_dir* 变量指向 *fann.so* 文件的目录. 该扩展构建过程中，在控制台输出时将会显示这个模块的安装路径，比如： ```text Installing '/usr/lib/php/extensions/no-debug-non-zts-20060613/fann.so' ``` 确认这个路径和 PHP 扩展是一致的，运行命令： ```text $ php -i | grep extension_dir extension_dir => /usr/lib/php/extensions/no-debug-non-zts-20060613 => /usr/lib/php/extensions/no-debug-non-zts-20060613 ``` 如果不是，更改 php.ini 文件的 *extension_dir* 值或者移动 *fann.so* 文件到相应的目录。
- 在 PHP 启动时添加该扩展，添加如下行代码： ```text extension=fann.so ```

## 资源类型
