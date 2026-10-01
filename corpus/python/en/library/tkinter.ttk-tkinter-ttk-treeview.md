---
id: "python-en-function-tkinter-ttk-treeview"
language: "python"
lang: "en"
category: "function"
name: "Treeview"
directive: "class"
module: "tkinter.ttk"
source_url: "https://docs.python.org/3/library/tkinter.ttk.html#tkinter.ttk.Treeview"
license: "PSF"
updated: "2026-10-01"
---

# Treeview

method:: bbox(item, column=None)

method:: get_children(item=None)

method:: set_children(item, *newchildren)

method:: column(column, option=None, **kw)

method:: delete(*items)

method:: detach(*items)

method:: exists(item)

method:: focus(item=None)

method:: heading(column, option=None, **kw)

method:: identify(component, x, y)

method:: identify_row(y)

method:: identify_column(x)

method:: identify_region(x, y)

method:: identify_element(x, y)

method:: index(item)

method:: insert(parent, index, iid=None, **kw)

method:: item(item, option=None, **kw)

method:: reattach(item, parent, index)

method:: move(item, parent, index)

method:: next(item)

method:: parent(item)

method:: prev(item)

method:: after_item(item, *, hidden=False, recurse=True)

method:: before_item(item, *, hidden=False, recurse=True)

method:: depth(item)

method:: haschildren(item)

method:: visible(item)

method:: size(item, *, hidden=False, recurse=False)

method:: range(first, last, *, hidden=False, recurse=True)

method:: identifier(item, index)

method:: current()

method:: expand(*items, recurse=False)

method:: collapse(*items, recurse=False)

method:: hide(*items, recurse=False)

method:: unhide(*items, recurse=False)

method:: detached(item=None)

method:: detached_all()

method:: cellfocus(cell=None)

method:: sort(parent, *, column=None, command=None, dictionary=False, integer=False, real=False, nocase=False, decreasing=False, ignoreempty=False, recurse=False)

method:: search(parent, pattern, *, columns=None, start=None, stop=None, dictionary=False, integer=False, real=False, nocase=False, glob=False, regexp=False, backwards=False, hidden=False, recurse=False, wraparound=False)

method:: search_all(parent, pattern, **kwargs)

method:: search_cell(parent, pattern, **kwargs)

method:: search_all_cells(parent, pattern, **kwargs)

method:: cellselection()

method:: cellselection_set(*cells)

method:: cellselection_add(*cells)

method:: cellselection_remove(*cells)

method:: cellselection_set_range(first, last, *, hidden=True, recurse=True)

method:: cellselection_add_range(first, last, *, hidden=True, recurse=True)

method:: cellselection_remove_range(first, last, *, hidden=True, recurse=True)

method:: cellselection_anchor(cell=None)

method:: cellselection_includes(*cells)

method:: cellselection_present()

method:: tag_cell_add(tagname, *cells)

method:: tag_cell_remove(tagname, *cells)

method:: tag_cell_has(tagname, cell=None)

method:: see(item)

method:: selection()

method:: selection_set(*items)

method:: selection_add(*items)

method:: selection_remove(*items)

method:: selection_toggle(*items)

method:: set(item, column=None, value=None)

method:: tag_bind(tagname, sequence=None, callback=None)

method:: tag_configure(tagname, option=None, **kw)

method:: tag_has(tagname, item=None)

method:: xview(*args)

method:: yview(*args)
