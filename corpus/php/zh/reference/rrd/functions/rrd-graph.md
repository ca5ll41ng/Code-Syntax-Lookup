---
id: "zh-php-function-function-rrd-graph"
language: "php"
lang: "zh"
category: "function"
name: "rrd_graph"
title: "从数据创建图像"
signature: "array rrd_graph(string $filename, array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-graph.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数据创建图像

## 说明

```php
array rrd_graph(string $filename, array $options)
```

从 RRD 文件的详细数据创建图像。

## 参数

- **`$filename`** — 输出的图表文件名。根据输出的格式，文件通常是 `.png`、`.svg` 或 `.eps` 格式。
- **`$options`** — 生成图像的选项。请参阅 rrd graph 手册以获取所有可用选项。允许使用所有选项（数据定义、变量定义等）。

## 返回值

返回包含生成图像信息的数组， 或者在失败时返回 `false`。
