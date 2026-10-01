---
id: "zh-php-guide-yaml-constants"
language: "php"
lang: "zh"
category: "guide"
name: "yaml.constants"
title: "预定义常量"
module: "yaml"
source_url: "https://www.php.net/manual/zh/yaml.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`YAML_ANY_SCALAR_STYLE` (`int`)**
- **`YAML_PLAIN_SCALAR_STYLE` (`int`)**
- **`YAML_SINGLE_QUOTED_SCALAR_STYLE` (`int`)**
- **`YAML_DOUBLE_QUOTED_SCALAR_STYLE` (`int`)**
- **`YAML_LITERAL_SCALAR_STYLE` (`int`)**
- **`YAML_FOLDED_SCALAR_STYLE` (`int`)**

- **`YAML_NULL_TAG` (`string`)** — "tag:yaml.org,2002:null"
- **`YAML_BOOL_TAG` (`string`)** — "tag:yaml.org,2002:bool"
- **`YAML_STR_TAG` (`string`)** — "tag:yaml.org,2002:str"
- **`YAML_INT_TAG` (`string`)** — "tag:yaml.org,2002:int"
- **`YAML_FLOAT_TAG` (`string`)** — "tag:yaml.org,2002:float"
- **`YAML_TIMESTAMP_TAG` (`string`)** — "tag:yaml.org,2002:timestamp"
- **`YAML_SEQ_TAG` (`string`)** — "tag:yaml.org,2002:seq"
- **`YAML_MAP_TAG` (`string`)** — "tag:yaml.org,2002:map"
- **`YAML_PHP_TAG` (`string`)** — "!php/object"

- **`YAML_ANY_ENCODING` (`int`)** — 让发射器(emitter)选择一个编码。
- **`YAML_UTF8_ENCODING` (`int`)** — 以 UTF8 编码。
- **`YAML_UTF16LE_ENCODING` (`int`)** — 以 UTF16LE 编码。
- **`YAML_UTF16BE_ENCODING` (`int`)** — 以 UTF16BE 编码。

- **`YAML_ANY_BREAK` (`int`)** — 让发射器(emitter)选择一个换行符。
- **`YAML_CR_BREAK` (`int`)** — 使用 `\r` 作为换行符(Mac 风格)。
- **`YAML_LN_BREAK` (`int`)** — 使用 `\n` 作为换行符(Unix 风格)。
- **`YAML_CRLN_BREAK` (`int`)** — 使用 `\r\n` 作为换行符(DOS 风格)。
