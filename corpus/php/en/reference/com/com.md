---
id: "en-php-guide-class-com"
language: "php"
lang: "en"
category: "guide"
name: "class.com"
title: "The com class"
module: "com"
source_url: "https://www.php.net/manual/en/class.com.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The com class

com

   Introduction  The com class allows you to instantiate an OLE compatible COM object and call its methods and access its properties.      Class Synopsis    `com`   `extends` `variant`        Overloaded Methods  The returned object is an overloaded object, which means that PHP does not see any fixed methods as it does with regular classes; instead, any property or method accesses are passed through to COM.    PHP will automatically detect methods that accept parameters by reference, and will automatically convert regular PHP variables to a form that can be passed by reference. This means that you can call the method very naturally; you needn't go to any extra effort in your code.     com examples  
**com example (1)**

```php

<?php
// starting word
$word = new com("word.application") or die("Unable to instantiate Word");
echo "Loaded Word, version {$word->Version}\n";

//bring it to front
$word->Visible = 1;

//open an empty document
$word->Documents->Add();

//do some weird stuff
$word->Selection->TypeText("This is a test...");
$word->Documents[1]->SaveAs("Useless test.doc");

//closing word
$word->Quit();

//free the object
$word = null;
?>

    
```

    
**com example (2)**

```php

<?php

$conn = new com("ADODB.Connection") or die("Cannot start ADO");
$conn->Open("Provider=SQLOLEDB; Data Source=localhost;
Initial Catalog=database; User ID=user; Password=password");

$rs = $conn->Execute("SELECT * FROM sometable");    // Recordset

$num_columns = $rs->Fields->Count();
echo $num_columns . "\n";

for ($i=0; $i < $num_columns; $i++) {
    $fld[$i] = $rs->Fields($i);
}

$rowcount = 0;
while (!$rs->EOF) {
    for ($i=0; $i < $num_columns; $i++) {
        echo $fld[$i]->value . "\t";
    }
    echo "\n";
    $rowcount++;            // increments rowcount
    $rs->MoveNext();
}

$rs->Close();
$conn->Close();

$rs = null;
$conn = null;

?>

     
```
