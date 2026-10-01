---
id: "zh-php-function-function-http-build-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "http_build_query"
title: "生成 URL-encode 之后的请求字符串"
signature: "string http_build_query(array|object $data, string $numeric_prefix = \"\", string|null $arg_separator = null, int $encoding_type = PHP_QUERY_RFC1738)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.http-build-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成 URL-encode 之后的请求字符串

## 说明

```php
string http_build_query(array|object $data, string $numeric_prefix = "", string|null $arg_separator = null, int $encoding_type = PHP_QUERY_RFC1738)
```

使用给出的关联（或下标）数组生成一个经过 URL-encode 的请求字符串。

## 参数

- **`$data`** — 可以是数组或包含属性的对象。 — 如果 `$data` 是数组，可以是一维结构，也可以是由数组组成的数组（其依次可以包含其它数组）。 — 如果 `$data` 是一个对象，只有 public 的属性会加入结果。
- **`$numeric_prefix`** — 如果在基础数组中使用了数字下标同时给出了该参数，此参数值将会作为基础数组中的数字下标元素的前缀。 — 这是为了让 PHP 或其它 CGI 程序在稍后对数据进行解码时获取合法的变量名。
- **`$arg_separator`** — 参数分隔符。如果未设置或为 `null`，arg_separator.output 用于分隔参数。
- **`$encoding_type`** — 默认使用 `PHP_QUERY_RFC1738`。 — 如果 `$encoding_type` 是 `PHP_QUERY_RFC1738`，则编码将会以 [RFC 1738](1738) 标准和 `application/x-www-form-urlencoded` 媒体类型进行编码，空格会被编码成加号（`+`）。 — 如果 `$encoding_type` 是 `PHP_QUERY_RFC3986`，将根据 [RFC 3986](3986) 编码，空格会被百分号编码（`%20`）。

## 返回值

返回一个 URL 编码后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | PHP 8.4.0 之前，BackedEnum 类型的 `$data` 属性会转换为对象，而不是其对应的标量值。 |
| 8.0.0 | `$arg_separator` 现在可为 null。 |

## 示例

**`http_build_query()` 使用示例**

```php


<?php
$data = array(
    'foo' => 'bar',
    'baz' => 'boom',
    'cow' => 'milk',
    'null' => null,
    'php' => 'hypertext processor'
);

echo http_build_query($data) . "\n";
echo http_build_query($data, '', '');

?>

   
```

以上示例会输出：

```text


foo=bar&baz=boom&cow=milk&php=hypertext+processor
foo=barbaz=boomcow=milkphp=hypertext+processor

   
```

**`http_build_query()` 使用数字下标的元素**

```php


<?php
$data = array('foo', 'bar', 'baz', null, 'boom', 'cow' => 'milk', 'php' => 'hypertext processor');

echo http_build_query($data) . "\n";
echo http_build_query($data, 'myvar_');
?>

   
```

以上示例会输出：

```text


0=foo&1=bar&2=baz&4=boom&cow=milk&php=hypertext+processor
myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_4=boom&cow=milk&php=hypertext+processor

   
```

**`http_build_query()` 使用复杂的数组**

```php


<?php
$data = array(
    'user' => array(
        'name' => 'Bob Smith',
        'age'  => 47,
        'sex'  => 'M',
        'dob'  => '5/12/1956'
    ),
    'pastimes' => array('golf', 'opera', 'poker', 'rap'),
    'children' => array(
        'bobby' => array('age'=>12, 'sex'=>'M'),
        'sally' => array('age'=>8, 'sex'=>'F')
    ),
    'CEO'
);

echo http_build_query($data, 'flags_');
?>

   
```

上面的例子将输出：（为了可读性，字已经换行了）

```text


user%5Bname%5D=Bob+Smith&user%5Bage%5D=47&user%5Bsex%5D=M&
user%5Bdob%5D=5%2F12%2F1956&pastimes%5B0%5D=golf&pastimes%5B1%5D=opera&
pastimes%5B2%5D=poker&pastimes%5B3%5D=rap&children%5Bbobby%5D%5Bage%5D=12&
children%5Bbobby%5D%5Bsex%5D=M&children%5Bsally%5D%5Bage%5D=8&
children%5Bsally%5D%5Bsex%5D=F&flags_0=CEO

   
```

> 只有基础数组中的数字下标元素“CEO”才获取了前缀，其它数字下标元素（如 pastimes 下的元素）则不需要为了合法的变量名而加上前缀。

**`http_build_query()` 使用对象**

```php


<?php
class parentClass {
    public    $pub      = 'publicParent';
    protected $prot     = 'protectedParent';
    private   $priv     = 'privateParent';
    public    $pub_bar  = null;
    protected $prot_bar = null;
    private   $priv_bar = null;

    public function __construct(){
        $this->pub_bar  = new childClass();
        $this->prot_bar = new childClass();
        $this->priv_bar = new childClass();
    }
}

class childClass {
    public    $pub  = 'publicChild';
    protected $prot = 'protectedChild';
    private   $priv = 'privateChild';
}

$parent = new parentClass();

echo http_build_query($parent);
?>

   
```

以上示例会输出：

```text


pub=publicParent&pub_bar%5Bpub%5D=publicChild

   
```

## 参见

`parse_str()` `parse_url()` `urlencode()` `array_walk()`
