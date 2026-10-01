---
id: "en-php-function-function-mailparse-uudecode-all"
language: "php"
lang: "en"
category: "function"
name: "mailparse_uudecode_all"
title: "Scans the data from fp and extract each embedded uuencoded file"
signature: "array mailparse_uudecode_all(resource $fp)"
module: "mailparse"
source_url: "https://www.php.net/manual/en/function.mailparse-uudecode-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scans the data from fp and extract each embedded uuencoded file

## Description

```php
array mailparse_uudecode_all(resource $fp)
```

Scans the data from the given file pointer and extract each embedded uuencoded file into a temporary file.

## Parameters

- **`$fp`** — A valid file pointer.

## Return Values

Returns an array of associative arrays listing filename information.

| `filename` | Path to the temporary file name created |
| --- | --- |
| `origfilename` | The original filename, for uuencoded parts only |

The first filename entry is the message body. The next entries are the decoded uuencoded files.

## Examples

**`mailparse_uudecode_all()` example**

```php


<?php

$text = <<<EOD
To: fred@example.com

hello, this is some text hello.
blah blah blah.

begin 644 test.txt
/=&AI<R!I<R!A('1E<W0*
`
end

EOD;

$fp = tmpfile();
fwrite($fp, $text);

$data = mailparse_uudecode_all($fp);

echo "BODY\n";
readfile($data[0]["filename"]);
echo "UUE ({$data[1]['origfilename']})\n";
readfile($data[1]["filename"]);

// Clean up
unlink($data[0]["filename"]);
unlink($data[1]["filename"]);

?>

   
```

The above example will output:

```text


BODY
To: fred@example.com

hello, this is some text hello.
blah blah blah.

UUE (test.txt)
this is a test

   
```
