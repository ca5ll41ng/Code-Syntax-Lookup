---
id: "zh-php-function-reserved-variables-httpresponseheader"
language: "php"
lang: "zh"
category: "function"
name: "$http_response_header"
title: "HTTP 响应头"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.httpresponseheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# HTTP 响应头

## 说明

`$http_response_header` `数组`与 `get_headers()` 函数类似。当使用HTTP 包装器时，`$http_response_header` 将会被 HTTP 响应头信息填充。`$http_response_header` 将被创建于局部作用域中。

## 示例

**`$http_response_header` 范例**

```php


<?php
function get_contents() {
  file_get_contents("http://example.com");
  var_dump($http_response_header); // 变量在本地作用域中填充
}
get_contents();
var_dump($http_response_header); // 调用 get_contents() 不会在函数作用域之外填充变量
?>

    
```

以上示例的输出类似于：

```text


array(9) {
  [0]=>
  string(15) "HTTP/1.1 200 OK"
  [1]=>
  string(35) "Date: Sat, 12 Apr 2008 17:30:38 GMT"
  [2]=>
  string(29) "Server: Apache/2.2.3 (CentOS)"
  [3]=>
  string(44) "Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT"
  [4]=>
  string(27) "ETag: "280100-1b6-80bfd280""
  [5]=>
  string(20) "Accept-Ranges: bytes"
  [6]=>
  string(19) "Content-Length: 438"
  [7]=>
  string(17) "Connection: close"
  [8]=>
  string(38) "Content-Type: text/html; charset=UTF-8"
}

Warning: Undefined variable $http_response_header
NULL

    
```

## 参见

 `http_get_last_response_headers()` `http_clear_last_response_headers()`
