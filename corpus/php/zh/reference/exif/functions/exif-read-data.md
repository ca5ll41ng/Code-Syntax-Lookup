---
id: "zh-php-function-function-exif-read-data"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "exif_read_data"
title: "从一个图片文件中读取 EXIF 头信息"
signature: "array|false exif_read_data(resource|string $file, string|null $required_sections = null, bool $as_arrays = false, bool $read_thumbnail = false)"
module: "exif"
source_url: "https://www.php.net/manual/zh/function.exif-read-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从一个图片文件中读取 EXIF 头信息

## 说明

```php
array|false exif_read_data(resource|string $file, string|null $required_sections = null, bool $as_arrays = false, bool $read_thumbnail = false)
```

`exif_read_data()` 函数从一个图片文件中读取 EXIF 头信息。这样就可以读取数码相机产生的元数据。

EXIF 头信息往往存在于数码相机生成的 JPEG/TIFF 图片中，但不幸的是每个数码相机制造商的标记都不同，因此（编写代码时）不能依赖于某个特定的 Exif 头信息。

`Height` 和 `Width` 是用和 `getimagesize()` 一样的方法计算的，因此它们的值不能是任何返回的头信息的部分。此外 `html` 是一个可以用于普通的 HTML 中的 height/width 的文本字符串。

当一个 Exif 头信息包含有一个 Copyright 时注意它本身可以包含两个值。解决方案和 Exif 2.10 标准不一致，`COMPUTED` 区段会同时返回 `Copyright.Photographer` 和 `Copyright.Editor`，但是 `IFD0` 区段则包含有一个字节数组用 NULL 字符分隔开两个项目。或者只有第一项如果数据类型错误的话（Exif 的正常行为）。`COMPUTED` 也会包含 `Copyright`，要么是原始的版权字符串，要么是逗号分隔的摄像与编辑的版权信息。

`UserComment` 标记和 Copyright 有同样的问题。它也可以存储两个值，第一个是使用的编码方式，第二个是其值本身。如果这样则 `IFD` 区段仅包含编码方式或者一个字节数组。`COMPUTED` 区段将存储两个值到 `UserCommentEncoding` 和 `UserComment`。`UserComment` 在两种情况下都可用因此应该优先使用它而不是 `IFD0` 区段中的该值。

`exif_read_data()` 还会根据 EXIF 规范（[]()，第 20 页）来验证 EXIF 数据。

## 参数

- **`$file`** — 图片文件的位置。这可以是一个文件路径（和往常一样，流封装也是支持的）， 或者是一个流式资源（stream `resource`）。
- **`$required_sections`** — 是需要存在于文件中的逗号分隔的区段列表用来产生结果数组。如果未找到所请求的区段则返回值为 `false`。 | FILE | FileName, FileSize, FileDateTime, SectionsFound | | --- | --- | | COMPUTED | html，Width，Height，IsColor，可能有更多其它的。Height 和 Width 是用和 `getimagesize()` 一样的方法计算的，因此它们的值不能是任何返回的头信息的部分。此外 `html` 是一个可以用于普通的 HTML 中的 height/width 的文本字符串。 | | ANY_TAG | 任何包含有标记的信息，例如 `IFD0`，`EXIF`，... | | IFD0 | 所有 IFD0 的标记数据。在标准的图像文件中这包含了图像大小及其它。 | | THUMBNAIL | 如果有第二个 `IFD`，文件应该包含有缩略图。所有有关嵌入缩略图的标记信息都存储在本区。 | | COMMENT | JPEG 图像的注释头信息。 | | EXIF | EXIF 区段是 `IFD0` 的子区，包含有图像的更多详细信息。大多数内容都是数码相机相关的。 |
- **`$as_arrays`** — 指定了是否每个区段都成为一个数组。`$required_sections` `COMPUTED`，`THUMBNAIL` 和`COMMENT` 区段总是成为数组，因为它们里面包含的名字和其它区段冲突。
- **`$read_thumbnail`** — 当设定为 `true` 时，读取缩略图本身。否则只读取标记数据。

## 返回值

返回一个关联数组，键名是头信息名，值为与其相应的值。如果没有可供返回的数据，`exif_read_data()` 将返回 `false`。

## 错误／异常

当遇到不支持的标签，或其他潜在的错误情况时，将抛出`E_WARNING` 与`E_NOTICE`等级的错误，但这个函数依然会尝试去读取所有可理解的信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$required_sections` 现在可以为空。 |
| 7.2.0 | `$file` 参数现在起支持本地文件和流式资源。 |
| 7.2.0 | 新增了以下 EXIF 格式的支持：  Samsung DJI Panasonic Sony Pentax Minolta Sigma/Foveon AGFA Kyocera Ricoh Epson |

## 示例

**`exif_read_data()` 例子**

```php


<?php
echo "test1.jpg:<br />\n";
$exif = exif_read_data('tests/test1.jpg', 'IFD0');
echo $exif===false ? "No header data found.<br />\n" : "Image contains headers<br />\n";

$exif = exif_read_data('tests/test2.jpg', 0, true);
echo "test2.jpg:<br />\n";
foreach ($exif as $key => $section) {
    foreach ($section as $name => $val) {
        echo "$key.$name: $val<br />\n";
    }
}
?>

   
```

第一个调用失败了，因为图像没有头信息。

以上示例的输出类似于：

```php


test1.jpg:
No header data found.
test2.jpg:
FILE.FileName: test2.jpg
FILE.FileDateTime: 1017666176
FILE.FileSize: 1240
FILE.FileType: 2
FILE.SectionsFound: ANY_TAG, IFD0, THUMBNAIL, COMMENT
COMPUTED.html: width="1" height="1"
COMPUTED.Height: 1
COMPUTED.Width: 1
COMPUTED.IsColor: 1
COMPUTED.ByteOrderMotorola: 1
COMPUTED.UserComment: Exif test image.
COMPUTED.UserCommentEncoding: ASCII
COMPUTED.Copyright: Photo (c) M.Boerger, Edited by M.Boerger.
COMPUTED.Copyright.Photographer: Photo (c) M.Boerger
COMPUTED.Copyright.Editor: Edited by M.Boerger.
IFD0.Copyright: Photo (c) M.Boerger
IFD0.UserComment: ASCII
THUMBNAIL.JPEGInterchangeFormat: 134
THUMBNAIL.JPEGInterchangeFormatLength: 523
COMMENT.0: Comment #1.
COMMENT.1: Comment #2.
COMMENT.2: Comment #3end
THUMBNAIL.JPEGInterchangeFormat: 134
THUMBNAIL.Thumbnail.Height: 1
THUMBNAIL.Thumbnail.Height: 1

   
```

**`exif_read_data()` with streams available as of PHP 7.2.0**

```php


<?php
// Open the file, this should be in binary mode
$fp = fopen('/path/to/image.jpg', 'rb');

if (!$fp) {
    echo 'Error: Unable to open image for reading';
    exit;
}

// Attempt to read the exif headers
$headers = exif_read_data($fp);

if (!$headers) {
    echo 'Error: Unable to read exif headers';
    exit;
}

// Print the 'COMPUTED' headers
echo 'EXIF Headers:' . PHP_EOL;

foreach ($headers['COMPUTED'] as $header => $value) {
    printf(' %s => %s%s', $header, $value, PHP_EOL);
}
?>

   
```

以上示例的输出类似于：

```php


EXIF Headers:
 Height => 576
 Width => 1024
 IsColor => 1
 ByteOrderMotorola => 0
 ApertureFNumber => f/5.6
 UserComment =>
 UserCommentEncoding => UNDEFINED
 Copyright => Denis
 Thumbnail.FileType => 2
 Thumbnail.MimeType => image/jpeg

   
```

## 注释

> If mbstring is enabled, exif will attempt to process the unicode and pick a charset as specified by exif.decode_unicode_motorola and exif.decode_unicode_intel. The exif extension will not attempt to figure out the encoding on its own, and it is up to the user to properly specify the encoding for which to use for decoding by setting one of these two ini directives prior to calling `exif_read_data()`.

> If the `$file` is used to pass a stream to this function, then the stream must be seekable. Note that the file pointer position is not changed after this function returns.

## 参见

 `exif_thumbnail()` `getimagesize()` `wrappers`
