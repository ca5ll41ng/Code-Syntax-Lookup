---
id: "en-php-guide-svn-constants"
language: "php"
lang: "en"
category: "guide"
name: "svn.constants"
title: "Predefined Constants"
module: "svn"
source_url: "https://www.php.net/manual/en/svn.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`SVN_REVISION_HEAD` (`int`)** — Magic number (-1) specifying the HEAD revision

- **`SVN_AUTH_PARAM_DEFAULT_USERNAME` (`string`)** — Property for default username to use when performing basic authentication
- **`SVN_AUTH_PARAM_DEFAULT_PASSWORD` (`string`)** — Property for default password to use when performing basic authentication
- **`SVN_AUTH_PARAM_NON_INTERACTIVE` (`string`)**
- **`SVN_AUTH_PARAM_DONT_STORE_PASSWORDS` (`string`)**
- **`SVN_AUTH_PARAM_NO_AUTH_CACHE` (`string`)**
- **`SVN_AUTH_PARAM_SSL_SERVER_FAILURES` (`string`)**
- **`SVN_AUTH_PARAM_SSL_SERVER_CERT_INFO` (`string`)**
- **`SVN_AUTH_PARAM_CONFIG` (`string`)**
- **`SVN_AUTH_PARAM_SERVER_GROUP` (`string`)**
- **`SVN_AUTH_PARAM_CONFIG_DIR` (`string`)**
- **`PHP_SVN_AUTH_PARAM_IGNORE_SSL_VERIFY_ERRORS` (`string`)** — Custom property for ignoring SSL cert verification errors

- **`SVN_FS_CONFIG_FS_TYPE` (`string`)** — Configuration key that determines filesystem type
- **`SVN_FS_TYPE_BDB` (`string`)** — Filesystem is Berkeley-DB implementation
- **`SVN_FS_TYPE_FSFS` (`string`)** — Filesystem is native-filesystem implementation

- **`SVN_PROP_REVISION_DATE` (`string`)** — svn:date
- **`SVN_PROP_REVISION_ORIG_DATE` (`string`)** — svn:original-date
- **`SVN_PROP_REVISION_AUTHOR` (`string`)** — svn:author
- **`SVN_PROP_REVISION_LOG` (`string`)** — svn:log

- **`SVN_WC_STATUS_NONE` (`int`)** — Status does not exist
- **`SVN_WC_STATUS_UNVERSIONED` (`int`)** — Item is not versioned in working copy
- **`SVN_WC_STATUS_NORMAL` (`int`)** — Item exists, nothing else is happening
- **`SVN_WC_STATUS_ADDED` (`int`)** — Item is scheduled for addition
- **`SVN_WC_STATUS_MISSING` (`int`)** — Item is versioned but missing from the working copy
- **`SVN_WC_STATUS_DELETED` (`int`)** — Item is scheduled for deletion
- **`SVN_WC_STATUS_REPLACED` (`int`)** — Item was deleted and then re-added
- **`SVN_WC_STATUS_MODIFIED` (`int`)** — Item (text or properties) was modified
- **`SVN_WC_STATUS_MERGED` (`int`)** — Item's local modifications were merged with repository modifications
- **`SVN_WC_STATUS_CONFLICTED` (`int`)** — Item's local modifications conflicted with repository modifications
- **`SVN_WC_STATUS_IGNORED` (`int`)** — Item is unversioned but configured to be ignored
- **`SVN_WC_STATUS_OBSTRUCTED` (`int`)** — Unversioned item is in the way of a versioned resource
- **`SVN_WC_STATUS_EXTERNAL` (`int`)** — Unversioned path that is populated using svn:externals
- **`SVN_WC_STATUS_INCOMPLETE` (`int`)** — Directory does not contain complete entries list

- **`SVN_NODE_NONE` (`int`)** — Absent
- **`SVN_NODE_FILE` (`int`)** — File
- **`SVN_NODE_DIR` (`int`)** — Directory
- **`SVN_NODE_UNKNOWN` (`int`)** — Something Subversion cannot identify
