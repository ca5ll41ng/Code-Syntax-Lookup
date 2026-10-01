---
id: "zh-php-function-function-oci-new-descriptor"
language: "php"
lang: "zh"
category: "function"
name: "oci_new_descriptor"
title: "初始化新的空 LOB 或 FILE 描述符"
signature: "OCILob|null oci_new_descriptor(resource $connection, int $type = OCI_DTYPE_LOB)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-new-descriptor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化新的空 LOB 或 FILE 描述符

## 说明

```php
OCILob|null oci_new_descriptor(resource $connection, int $type = OCI_DTYPE_LOB)
```

分配保存描述符或 LOB 定位器的资源。

## 参数

- **`$connection`** — Oracle 连接标识符，由 `oci_connect()` 或 `oci_pconnect()` 返回。
- **`$type`** — `$type` 的有效值是：`OCI_DTYPE_FILE`、`OCI_DTYPE_LOB` 和 `OCI_DTYPE_ROWID`。

## 返回值

成功时返回新 LOB 或 FILE 描述符，失败时为 `null`。

## 示例

**`oci_new_descriptor()` 示例**

```php


<?php
/* This script is designed to be called from a HTML form.
 * It expects $user, $password, $table, $where, and $commitsize
 * to be passed in from the form.  The script then deletes
 * the selected rows using the ROWID and commits after each
 * set of $commitsize rows. (Use with care, there is no rollback)
 */
$conn = oci_connect($user, $password);
$stmt = oci_parse($conn, "select rowid from $table $where");
$rowid = oci_new_descriptor($conn, OCI_D_ROWID);
oci_define_by_name($stmt, "ROWID", $rowid);
oci_execute($stmt);
while (oci_fetch($stmt)) {
    $nrows = oci_num_rows($stmt);
    $delete = oci_parse($conn, "delete from $table where ROWID = :rid");
    oci_bind_by_name($delete, ":rid", $rowid, -1, OCI_B_ROWID);
    oci_execute($delete);
    echo "$nrows\n";
    if (($nrows % $commitsize) == 0) {
        oci_commit($conn);
    }
}
$nrows = oci_num_rows($stmt);
echo "$nrows deleted...\n";
oci_free_statement($stmt);
oci_close($conn);
?>

    
```

```php


<?php
    /* This script demonstrates file upload to LOB columns
     * The formfield used for this example looks like this
     * <form action="upload.php" method="post" enctype="multipart/form-data">
     * <input type="file" name="lob_upload" />
     * ...
     */
  if (!isset($lob_upload) || $lob_upload == 'none'){
?>
<form action="upload.php" method="post" enctype="multipart/form-data">
Upload file: <input type="file" name="lob_upload" /><br />
<input type="submit" value="Upload" /> - <input type="reset" value="Reset" />
</form>
<?php
  } else {

     // $lob_upload contains the temporary filename of the uploaded file

     // see also the features section on file upload,
     // if you would like to use secure uploads

     $conn = oci_connect($user, $password);
     $lob = oci_new_descriptor($conn, OCI_D_LOB);
     $stmt = oci_parse($conn, "insert into $table (id, the_blob)
               values(my_seq.NEXTVAL, EMPTY_BLOB()) returning the_blob into :the_blob");
     oci_bind_by_name($stmt, ':the_blob', $lob, -1, OCI_B_BLOB);
     oci_execute($stmt, OCI_DEFAULT);
     if ($lob->savefile($lob_upload)){
        oci_commit($conn);
        echo "Blob successfully uploaded\n";
     }else{
        echo "Couldn't upload Blob\n";
     }
     $lob->free();
     oci_free_statement($stmt);
     oci_close($conn);
  }
?>

    
```

**`oci_new_descriptor()` 示例**

```php


<?php
/* Calling PL/SQL stored procedures which contain clobs as input
 * parameters.
 * Example PL/SQL stored procedure signature is:
 *
 * PROCEDURE save_data
 *   Argument Name                  Type                    In/Out Default?
 *   ------------------------------ ----------------------- ------ --------
 *   KEY                            NUMBER(38)              IN
 *   DATA                           CLOB                    IN
 *
 */

$conn = oci_connect($user, $password);
$stmt = oci_parse($conn, "begin save_data(:key, :data); end;");
$clob = oci_new_descriptor($conn, OCI_D_LOB);
oci_bind_by_name($stmt, ':key', $key);
oci_bind_by_name($stmt, ':data', $clob, -1, OCI_B_CLOB);
$clob->write($data);
oci_execute($stmt, OCI_DEFAULT);
oci_commit($conn);
$clob->free();
oci_free_statement($stmt);
?>

    
```

## 参见

`oci_bind_by_name()`
