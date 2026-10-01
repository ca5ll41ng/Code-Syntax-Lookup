---
id: "en-php-function-function-svn-log"
language: "php"
lang: "en"
category: "function"
name: "svn_log"
title: "Returns the commit log messages of a repository URL"
signature: "array svn_log(string $repos_url, [int $start_revision = ...], [int $end_revision = ...], int $limit = 0, int $flags = SVN_DISCOVER_CHANGED_PATHS | SVN_STOP_ON_COPY)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the commit log messages of a repository URL

## Description

```php
array svn_log(string $repos_url, [int $start_revision = ...], [int $end_revision = ...], int $limit = 0, int $flags = SVN_DISCOVER_CHANGED_PATHS | SVN_STOP_ON_COPY)
```

`svn_log()` returns the complete history of the item at the repository URL `$repos_url`, or the history of a specific revision if `$start_revision` is set. This function is equivalent to svn log --verbose -r $start_revision $repos_url.

## Parameters

- **`$repos_url`** — Repository URL of the item to retrieve log history from.
- **`$start_revision`** — Revision number of the first log to retrieve. Use `SVN_REVISION_HEAD` to retrieve the log from the most recent revision.
- **`$end_revision`** — Revision number of the last log to retrieve. Defaults to `$start_revision` if specified or to `SVN_REVISION_INITIAL` otherwise.
- **`$limit`** — Number of logs to retrieve.
- **`$flags`** — Any combination of `SVN_OMIT_MESSAGES`, `SVN_DISCOVER_CHANGED_PATHS` and `SVN_STOP_ON_COPY`.

## Return Values

On success, this function returns an array file listing in the format of:

```text


[0] => Array, ordered most recent (highest) revision first
(
    [rev] => integer revision number
    [author] => string author name
    [msg] => string log message
    [date] => string date formatted per ISO 8601, i.e. date('c')
    [paths] => Array, describing changed files
        (
            [0] => Array
                (
                    [action] => string letter signifying change
                    [path] =>  absolute repository path of changed file
                )
            [1] => ...
        )
)
[1] => ...

    
```

> The output will always be a numerically indexed array of arrays, even when there are none or only one log message(s).

The value of `action` is a subset of the [status output in the first column](), where possible values are:

| Letter | Description |
| --- | --- |
| M | Item/props was modified |
| A | Item was added |
| D | Item was deleted |
| R | Item was replaced |

If no changes were made to the item, an empty array is returned.

## Examples

**`svn_log()` example**

```php


<?php
print_r( svn_log('http://www.example.com/', 23) );
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => Array
    (
        [rev] => 23
        [author] => 'joe'
        [msg] => 'Add cheese and salami to our sandwich.'
        [date] => '2007-04-06T16:00:27-04:00'
        [paths] => Array
            (
                [0] => Array
                    (
                        [action] => 'M'
                        [path] =>  '/sandwich.txt'
                    )
            )
    )
)

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

  [SVN documentation on svn log]()
