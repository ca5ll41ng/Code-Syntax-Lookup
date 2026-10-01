---
id: "en-php-function-function-ibase-backup"
language: "php"
lang: "en"
category: "function"
name: "ibase_backup"
title: "Initiates a backup task in the service manager and returns immediately"
signature: "mixed ibase_backup(resource $service_handle, string $source_db, string $dest_file, int $options = 0, bool $verbose = false)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-backup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initiates a backup task in the service manager and returns immediately

## Description

```php
mixed ibase_backup(resource $service_handle, string $source_db, string $dest_file, int $options = 0, bool $verbose = false)
```

This function passes the arguments to the (remote) database server. There it starts a new backup process. Therefore you won't get any responses.

## Parameters

- **`$service_handle`** — A previously opened connection to the database server.
- **`$source_db`** — The absolute file path to the database on the database server. You can also use a database alias.
- **`$dest_file`** — The path to the backup file on the database server.
- **`$options`** — Additional options to pass to the database server for backup. The `$options` parameter can be a combination of the following constants: `IBASE_BKP_IGNORE_CHECKSUMS`, `IBASE_BKP_IGNORE_LIMBO`, `IBASE_BKP_METADATA_ONLY`, `IBASE_BKP_NO_GARBAGE_COLLECT`, `IBASE_BKP_OLD_DESCRIPTIONS`, `IBASE_BKP_NON_TRANSPORTABLE` or `IBASE_BKP_CONVERT`. Read the section about `ibase.constants` for further information.
- **`$verbose`** — Since the backup process is done on the database server, you don't have any chance to get its output. This argument is useless.

## Return Values

Returns `true` on success or `false` on failure.

Since the backup process is done on the (remote) server, this function just passes the arguments to it. While the arguments are legal, you won't get `false`.

## Examples

**`ibase_backup()` example**

```php


<?php

// Attach to database server by ip address and port
$service = ibase_service_attach ('10.1.11.200/3050', 'sysdba', 'masterkey');

// Start the backup process on database server
// Backup employee database using full path to /srv/backup/employees.fbk
// Don't use any special arguments
ibase_backup($service, '/srv/firebird/employees.fdb', '/srv/backup/employees.fbk');

// Free the attached connection
ibase_service_detach ($service);
?>

   
```

**`ibase_backup()` example with arguments**

```php


<?php

// Attach to database server by name and default port
$service = ibase_service_attach ('fb-server.contoso.local', 'sysdba', 'masterkey');

// Start the backup process on database server
// Backup employee database using alias to /srv/backup/employees.fbk.
// Backup only the metadata. Don't create a transportable backup.
ibase_backup($service, 'employees.fdb', '/srv/backup/employees.fbk', IBASE_BKP_METADATA_ONLY | IBASE_BKP_NON_TRANSPORTABLE);

// Free the attached connection
ibase_service_detach ($service);
?>

   
```

## See Also

 `ibase_restore()`
