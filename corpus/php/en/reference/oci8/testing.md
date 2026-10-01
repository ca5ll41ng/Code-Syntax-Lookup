---
id: "en-php-guide-oci8-test"
language: "php"
lang: "en"
category: "guide"
name: "oci8.test"
title: "Testing"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.test.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Testing

The OCI8 test suite is in `ext/oci8/tests`. After OCI8 tests are run this directory will also contain logs of any failures.

Before running PHP's tests, edit `details.inc` and set $user, $password and the $dbase connection string. The OCI8 test suite has been developed using the `SYSTEM` account. Some tests will fail if the test user does not have equivalent permissions.

If Oracle Database Resident Connection Pooling is being tested, set $test_drcp to `true` and ensure the connection string uses an appropriate DRCP pooled server.

An alternative to editing `details.inc` is the set environment variables, for example:

```text


    $ export PHP_OCI8_TEST_USER=system
    $ export PHP_OCI8_TEST_PASS=oracle
    $ export PHP_OCI8_TEST_DB=localhost/XE
    $ export PHP_OCI8_TEST_DRCP=FALSE

  
```

Note in some shells these variables are not propagated correctly to the PHP process and tests will fail to connect if this method is used.

Next, set any necessary environment for the Oracle database. If you are running PHP on the same machines as Oracle Database, you can run:

```text


    $ . /usr/local/bin/oraenv

  
```

With Oracle 11*g*R2 XE do:

```text


    $ . /u01/app/oracle/product/11.2.0/xe/bin/oracle_env.sh

  
```

Some shells require that php.ini has `E` in the variables_order parameter, for example:

```text


    variables_order = "EGPCS"

  
```

Run all the PHP tests with:

```text


    $ cd your_php_src_directory
    $ make test

  
```

or run only the OCI8 tests with

```text


    $ cd your_php_src_directory
    $ make test TESTS=ext/oci8

  
```

When the tests have completed, review any test failures. On slow systems, some tests may take longer than the default test timeout in `run-tests.php`. To correct this, set the environment variable `TEST_TIMEOUT` to a larger number of seconds.

On fast machines with a local database configured for light load (e.g. Oracle 11*g*R2 XE) some tests might fail with ORA-12516 or ORA-12520 errors. To prevent this, increase the database `PROCESSES` parameter using the following steps:

Connect as the oracle software owner:

```text


    $ su - oracle

  
```

Set the necessary Oracle environment with `oracle_env.sh` or `oraenv`, as described above.

Start the SQL*Plus command line tool and increase `PROCESSES`

```text


    $ sqlplus / as sysdba
    SQL> alter system set processes=100 scope=spfile

  
```

Restart the database:

```text


    SQL> startup force

  
```
