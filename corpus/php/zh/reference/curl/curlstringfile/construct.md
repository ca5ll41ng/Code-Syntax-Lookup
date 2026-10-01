---
id: "zh-php-function-curlstringfile-construct"
language: "php"
lang: "zh"
category: "function"
name: "CURLStringFile::__construct"
title: "创建 CURLStringFile 对象"
signature: "public CURLStringFile::__construct(string $data, string $postname, string $mime = \"application/octet-stream\")"
module: "curl"
source_url: "https://www.php.net/manual/zh/curlstringfile.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 CURLStringFile 对象

## 说明

```php
public CURLStringFile::__construct(string $data, string $postname, string $mime = "application/octet-stream")
```

创建 `CURLStringFile` 对象，使用 `CURLOPT_POSTFIELDS` 选项上传文件。

## 参数

- **`$data`** — 待上传的内容。
- **`$postname`** — 上传数据中的文件名称。
- **`$mime`** — 文件的 MIME 类型（默认为 `application/octet-stream`）。

## 示例

**`CURLStringFile::__construct()` 示例**

```php


<?php
/* http://example.com/upload.php:
<?php
var_dump($_FILES);
var_dump(file_get_contents($_FILES['test_string']['tmp_name']));
?>
*/

// 创建一个 cURL 句柄
$ch = curl_init('http://example.com/upload.php');

// 创建一个 CURLStringFile 对象
$cstringfile = new CURLStringFile('test upload contents','test.txt','text/plain');

// 指定 POST 内容
$data = array('test_string' => $cstringfile);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// 执行句柄
curl_exec($ch);
?>

   
```

以上示例会输出：

```text


array(1) {
  ["test_string"]=>
  array(5) {
    ["name"]=>
    string(8) "test.txt"
    ["type"]=>
    string(10) "text/plain"
    ["tmp_name"]=>
    string(14) "/tmp/phpTtaoCz"
    ["error"]=>
    int(0)
    ["size"]=>
    int(20)
  }
}
string(20) "test upload contents"

   
```

## 参见

`curl_setopt()`
