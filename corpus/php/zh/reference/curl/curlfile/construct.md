---
id: "zh-php-function-curlfile-construct"
language: "php"
lang: "zh"
category: "function"
name: "CURLFile::__construct"
aliases: ["curl_file_create"]
title: "创建 CURLFile 对象"
signature: "public CURLFile::__construct(string $filename, string|null $mime_type = null, string|null $posted_filename = null)"
module: "curl"
source_url: "https://www.php.net/manual/zh/curlfile.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 CURLFile 对象

## 说明

面向对象风格

```php
public CURLFile::__construct(string $filename, string|null $mime_type = null, string|null $posted_filename = null)
```

过程化风格

```php
CURLFile curl_file_create(string $filename, string|null $mime_type = null, string|null $posted_filename = null)
```

创建 `CURLFile` 对象，用于使用 `CURLOPT_POSTFIELDS` 选项上传文件。

## 参数

- **`$filename`** — 被上传文件的 路径。
- **`$mime_type`** — 被上传文件的 MIME 类型。
- **`$posted_filename`** — 上传数据里面的文件名。

## 返回值

返回 `CURLFile` 对象。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$mime_type` 和 `$posted_filename` 现在可以为 null；之前它们的默认值是 `0`。 |

## 示例

**`CURLFile::__construct()` 示例**

面向对象风格

```php


<?php
/* http://example.com/upload.php:
<?php var_dump($_FILES); ?>
*/

// 创建 cURL 句柄
$ch = curl_init('http://example.com/upload.php');

// 创建 CURLFile 对象
$cfile = new CURLFile('cats.jpg','image/jpeg','test_name');

// 赋值 POST 数据
$data = array('test_file' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// 执行句柄
curl_exec($ch);
?>

   
```

过程化风格

```php


<?php
/* http://example.com/upload.php:
<?php var_dump($_FILES); ?>
*/

// 创建 cURL 句柄
$ch = curl_init('http://example.com/upload.php');

// 创建 CURLFile 对象
$cfile = curl_file_create('cats.jpg','image/jpeg','test_name');

// 赋值 POST 数据
$data = array('test_file' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// 执行句柄
curl_exec($ch);
?>

   
```

以上示例会输出：

```text


array(1) {
  ["test_file"]=>
  array(5) {
    ["name"]=>
    string(9) "test_name"
    ["type"]=>
    string(10) "image/jpeg"
    ["tmp_name"]=>
    string(14) "/tmp/phpPC9Kbx"
    ["error"]=>
    int(0)
    ["size"]=>
    int(46334)
  }
}

   
```

**`CURLFile::__construct()` 上传多文件示例**

面向对象风格

```php


<?php
$request = curl_init('http://www.example.com/upload.php');
curl_setopt($request, CURLOPT_POST, true);
curl_setopt($request, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($request, CURLOPT_POSTFIELDS, [
    'blob[0]' => new CURLFile(realpath('first-file.jpg'), 'image/jpeg'),
    'blob[1]' => new CURLFile(realpath('second-file.txt'), 'text/plain'),
    'blob[2]' => new CURLFile(realpath('third-file.exe'), 'application/octet-stream'),
]);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($request);

var_dump(curl_getinfo($request));

   
```

过程化风格

```php


<?php
// procedural
$request = curl_init('http://www.example.com/upload.php');
curl_setopt($request, CURLOPT_POST, true); 
curl_setopt($request, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($request, CURLOPT_POSTFIELDS, [
    'blob[0]' => curl_file_create(realpath('first-file.jpg'), 'image/jpeg'),
    'blob[1]' => curl_file_create(realpath('second-file.txt'), 'text/plain'),
    'blob[2]' => curl_file_create(realpath('third-file.exe'), 'application/octet-stream'),
]);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($request);

var_dump(curl_getinfo($request));

   
```

以上示例会输出：

```text


array(26) {
  ["url"]=>
  string(31) "http://www.example.com/upload.php"
  ["content_type"]=>
  string(24) "text/html; charset=UTF-8"
  ["http_code"]=>
  int(200)
  ["header_size"]=>
  int(198)
  ["request_size"]=>
  int(196)
  ["filetime"]=>
  int(-1)
  ["ssl_verify_result"]=>
  int(0)
  ["redirect_count"]=>
  int(0)
  ["total_time"]=>
  float(0.060062)
  ["namelookup_time"]=>
  float(0.028575)
  ["connect_time"]=>
  float(0.029011)
  ["pretransfer_time"]=>
  float(0.029121)
  ["size_upload"]=>
  float(3230730)
  ["size_download"]=>
  float(811)
  ["speed_download"]=>
  float(13516)
  ["speed_upload"]=>
  float(53845500)
  ["download_content_length"]=>
  float(811)
  ["upload_content_length"]=>
  float(3230730)
  ["starttransfer_time"]=>
  float(0.030355)
  ["redirect_time"]=>
  float(0)
  ["redirect_url"]=>
  string(0) ""
  ["primary_ip"]=>
  string(13) "0.0.0.0"
  ["certinfo"]=>
  array(0) {
  }
  ["primary_port"]=>
  int(80)
  ["local_ip"]=>
  string(12) "0.0.0.0"
  ["local_port"]=>
  int(34856)
}

   
```

## 参见

`curl_setopt()`
