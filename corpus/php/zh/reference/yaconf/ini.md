---
id: "zh-php-guide-yaconf-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "yaconf.configuration"
title: "运行时配置"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/yaconf.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| yaconf.directory | `""` | `INI_SYSTEM` |  |
| yaconf.check_delay | `300` | `INI_SYSTEM` |  |

这是配置指令的简短说明。

- **`$yaconf.directory` `string`** — 存放所有 INI 配置文件的目录。只有扩展名为 `.ini` 的文件会被加载。 子目录会被递归加载（最多 16 层深），每一级子目录都作为一级键 参与寻址：例如放在 `users/` 子目录下的 `database.ini` 文件，通过 `"users.database"` 访问。该特性自 Yaconf 1.2.0 起提供；在此之前，只有直接位于该目录下的文件会被加载。 — 下面的示例假定在配置的目录中放置了如下 `database.ini`，以及一个存放各功能开关设置的 `features.ini`。
  **INI 文件语法**

  ```ini


  ; database.ini
  name=production                        ; scalar value
  version=PHP_VERSION                    ; PHP constants are resolved
  connection_string=${DATABASE_URL}      ; environment variables are resolved
  options.max_connections=50             ; nested hash key
  options.timeout=30

  ; array entries, both notations are equivalent
  replicas.0=replica-1.example.com
  replicas[]=replica-2.example.com

         
  ```


  **INI section 示例**

  ```ini


  ; features.ini
  [default]
  cache_enabled=on
  rate_limit=100

  ; the "premium" section inherits every key from "default" and
  ; overrides the ones it redefines
  [premium:default]
  rate_limit=1000

         
  ```


- **`$yaconf.check_delay` `int`** — Yaconf 检查已加载的 INI 文件是否发生变更、并重新加载变更文件的时间间隔， 单位为秒（通过比较目录的修改时间来检测变更）。将其设置为 `0` 时，Yaconf 会在每个请求时都进行检查。
  > 该配置项只在非 ZTS 构建中注册。在 ZTS（线程安全）构建中， 配置仅在启动时加载，不支持自动重新加载；修改后需要重启 PHP 才能生效。
