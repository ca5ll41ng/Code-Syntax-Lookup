---
id: "python-zh-function-importlib-metadata-importlib-metadata"
language: "python"
lang: "zh"
category: "function"
name: "importlib.metadata"
title: "Implementing Custom Providers"
directive: "module"
module: "importlib.metadata"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.metadata.html#module-importlib.metadata"
license: "PSF"
updated: "2026-10-01"
---

# Implementing Custom Providers

.. _implementing-custom-providers:

**Implementing Custom Providers**

`importlib.metadata` address two API surfaces, one for *consumers*
and another for *providers*. Most users are consumers, consuming
metadata provided by the packages. There are other use-cases, however,
where users wish to expose metadata through some other mechanism,
such as alongside a custom importer. Such a use case calls for a
*custom provider*.

Because [Distribution Package](https://packaging.python.org/en/latest/glossary/#term-Distribution-Package) metadata
is not available through `sys.path` searches, or
package loaders directly,
the metadata for a distribution is found through import
system `finders`. To find a distribution package's metadata,
`importlib.metadata` queries the list of `meta path finders` on
`sys.meta_path`.

The implementation has hooks integrated into the `PathFinder`,
serving metadata for distribution packages found on the file system.

The abstract class :py`importlib.abc.MetaPathFinder` defines the
interface expected of finders by Python's import system.
`importlib.metadata` extends this protocol by looking for an optional
`find_distributions` callable on the finders from
`sys.meta_path` and presents this extended interface as the
`DistributionFinder` abstract base class, which defines this abstract
method::

    @abc.abstractmethod
    def find_distributions(context=DistributionFinder.Context()) -> Iterable[Distribution]:
        """Return an iterable of all Distribution instances capable of
        loading the metadata for packages for the indicated `context`.
        """

The `DistributionFinder.Context` object provides
`~DistributionFinder.Context.path` and
`~DistributionFinder.Context.name` properties indicating the path to
search and name to match and may supply other relevant context sought by the
consumer.

In practice, to support finding distribution package
metadata in locations other than the file system, subclass
`Distribution` and implement the abstract methods. Then from
a custom finder, return instances of this derived `Distribution` in the
`find_distributions()` method.

**Example**

设想一个从数据库中加载 Python 模块的自定义查找器::

    class DatabaseImporter(importlib.abc.MetaPathFinder):
        def __init__(self, db):
            self.db = db

        def find_spec(self, fullname, target=None) -> ModuleSpec:
            return self.db.spec_from_name(fullname)

    sys.meta_path.append(DatabaseImporter(connect_db(...)))

That importer now presumably provides importable modules from a
database, but it provides no metadata or entry points. For this
custom importer to provide metadata, it would also need to implement
`DistributionFinder`::

    from importlib.metadata import DistributionFinder

    class DatabaseImporter(DistributionFinder):
        ...

        def find_distributions(self, context=DistributionFinder.Context()):
            query = dict(name=context.name) if context.name else {}
            for dist_record in self.db.query_distributions(query):
                yield DatabaseDistribution(dist_record)

In this way, `query_distributions` would return records for
each distribution served by the database matching the query. For
example, if `requests-1.0` is in the database, `find_distributions`
would yield a `DatabaseDistribution` for `Context(name='requests')`
or `Context(name=None)`.

For the sake of simplicity, this example ignores `context.path`\. The
`path` attribute defaults to `sys.path` and is the set of import paths to
be considered in the search. A `DatabaseImporter` could potentially function
without any concern for a search path. Assuming the importer does no
partitioning, the "path" would be irrelevant. In order to illustrate the
purpose of `path`, the example would need to illustrate a more complex
`DatabaseImporter` whose behavior varied depending on
`sys.path`/`PYTHONPATH`. In that case, the `find_distributions` should
honor the `context.path` and only yield `Distribution`\ s pertinent to that
path.

那么，``DatabaseDistribution`` 看起来就像是这样::

    class DatabaseDistribution(importlib.metadata.Distribution):
        def __init__(self, record):
            self.record = record

        def read_text(self, filename):
            """
            Read a file like "METADATA" for the current distribution.
            """
            if filename == "METADATA":
                return f"""Name: {self.record.name}
    Version: {self.record.version}
    """
            if filename == "entry_points.txt":
                return "\n".join(
                  f"""[{ep.group}]\n{ep.name}={ep.value}"""
                  for ep in self.record.entry_points)

        def locate_file(self, path):
            raise RuntimeError("This distribution has no file system")

This basic implementation should provide metadata and entry points for
packages served by the `DatabaseImporter`, assuming that the
`record` supplies suitable `.name`, `.version`, and
`.entry_points` attributes.

The `DatabaseDistribution` may also provide other metadata files, like
`RECORD` (required for `Distribution.files`) or override the
implementation of `Distribution.files`. See the source for more inspiration.
