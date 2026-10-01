---
id: "zh-php-function-function-curl-multi-exec"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_exec"
title: "运行当前 cURL 句柄的子连接"
signature: "int curl_multi_exec(CurlMultiHandle $multi_handle, int $still_running)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行当前 cURL 句柄的子连接

## 说明

```php
int curl_multi_exec(CurlMultiHandle $multi_handle, int $still_running)
```

处理在栈中的每一个句柄。无论该句柄需要读取或写入数据都可调用此方法。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$still_running`** — 一个用来判断操作是否仍在执行的标识的引用。

## 返回值

定义于 cURL 预定义常量中的 cURL 代码。

> 该函数仅返回关于整个批处理栈相关的错误。即使返回 `CURLM_OK` 时单个传输仍可能有问题。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |

## 示例

**`curl_multi_exec()` 示例**

此示例将为 URL 列表创建 cURL 句柄，把它们加到批处理句柄，然后并行处理它们。

```php


<?php

$urls = [
    "https://www.php.net/",
    "https://www.example.com/",
];

$mh = curl_multi_init();
$map = new WeakMap();

foreach ($urls as $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_multi_add_handle($mh, $ch);
    $map[$ch] = $url;
}

do {
    $status = curl_multi_exec($mh, $unfinishedHandles);
    if ($status !== CURLM_OK) {
        throw new \Exception(curl_multi_strerror(curl_multi_errno($mh)));
    }

    while (($info = curl_multi_info_read($mh)) !== false) {
        if ($info['msg'] === CURLMSG_DONE) {
            $handle = $info['handle'];
            curl_multi_remove_handle($mh, $handle);
            $url = $map[$handle];

            if ($info['result'] === CURLE_OK) {
                $statusCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);

                echo "Request to {$url} finished with HTTP status {$statusCode}:", PHP_EOL;
                echo curl_multi_getcontent($handle);
                echo PHP_EOL, PHP_EOL;
            } else {
                echo "Request to {$url} failed with error: ", PHP_EOL;
                echo curl_strerror($info['result']);
                echo PHP_EOL, PHP_EOL;
            }
        }
    }

    if ($unfinishedHandles) {
        if (($updatedHandles = curl_multi_select($mh)) === -1) {
            throw new \Exception(curl_multi_strerror(curl_multi_errno($mh)));
        }
    }
} while ($unfinishedHandles);

curl_multi_close($mh);

?>

    
```

## 参见

`curl_multi_init()` `curl_multi_select()` `curl_exec()`
