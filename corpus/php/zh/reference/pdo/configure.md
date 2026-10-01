---
id: "zh-php-guide-pdo-installation"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.installation"
title: "安装"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

此扩展默认为启用，编译时可通过下列选项禁用： --disable-pdo

 在 Unix 系统上安装 PDO   PDO 和 PDO_SQLITE 驱动默认可用。对所选的数据库应启用相应的 POD 驱动；查阅特定数据库的 PDO 驱动文档获取更多内容。   
> 当以共享扩展（*不推荐*）构建 PDO 时，所有 PDO 驱动*必须*在 PDO 自身*之后*加载。

    当作为共享模块安装 PDO 时，需要更新 php.ini 文件以便 PHP 运行时能自动加载 PDO 扩展。还需在文件启用数据库专用驱动；确保这些驱动列在 extension=pdo 那一行之后，因为 PDO 必须在数据库专用扩展载入前完成初始化。如果以静态方式构建 PDO 和数据库专用扩展，此步骤可省略。 
```text

extension=pdo

    
```

    

 Windows 用户   PDO 默认启用。选择其他数据库专用 DLL 文件，可在运行时用 `dl()` 载入，或在 php.ini 中启用。例如以下配置加载了 PDO_SQLITE 驱动，但将 PDO_ODBC 驱动处于注释状态： 
```text

;extension=pdo_odbc
extension=pdo_sqlite

    
```

    那些 DLL 文件应该在系统的extension_dir 中存在。    

> 记住：更改 php.ini 文件后需要重启 PHP 服务才能使新的配置指令生效。
