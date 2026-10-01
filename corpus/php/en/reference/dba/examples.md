---
id: "en-php-guide-dba-examples"
language: "php"
lang: "en"
category: "guide"
name: "dba.examples"
title: "Examples"
module: "dba"
source_url: "https://www.php.net/manual/en/dba.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Basic usage

**DBA example**

```php


<?php

$id = dba_open("/tmp/test.db", "n", "db2");

if (!$id) {
    echo "dba_open failed\n";
    exit;
}

dba_replace("key", "This is an example!", $id);

if (dba_exists("key", $id)) {
    echo dba_fetch("key", $id);
    dba_delete("key", $id);
}

dba_close($id);
?>

   
```

DBA is binary safe and does not have any arbitrary limits. However, it inherits all limits set by the underlying database implementation.

All file-based databases must provide a way of setting the file mode of a new created database, if that is possible at all. The file mode is commonly passed as the fourth argument to `dba_open()` or `dba_popen()`.

You can access all entries of a database in a linear way by using the `dba_firstkey()` and `dba_nextkey()` functions. You may not change the database while traversing it.

**Traversing a database**

```php


<?php

// ...open database...

$key = dba_firstkey($id);

while ($key !== false) {
    if (true) {          // remember the key to perform some action later
        $handle_later[] = $key;
    }
    $key = dba_nextkey($id);
}

foreach ($handle_later as $val) {
    dba_delete($val, $id);
}

?>

   
```
