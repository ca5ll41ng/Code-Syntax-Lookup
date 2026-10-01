---
id: "python-en-function-tkinter-event"
language: "python"
lang: "en"
category: "function"
name: "Event"
signature: "Event()"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Event"
license: "PSF"
updated: "2026-10-01"
---

# Event

A container for the attributes of an event passed to a callback bound with
`Misc.bind`.
An `Event` instance has the following attributes, each corresponding
to a field of the underlying Tk event; depending on the event type, some
attributes may be set to the string `'??'` to indicate that they are not
meaningful.
See `bindings-and-events`.

attribute:: serial

attribute:: num

attribute:: focus

attribute:: height

attribute:: keycode

attribute:: state

attribute:: time

attribute:: x

attribute:: x_root

attribute:: char

attribute:: send_event

attribute:: keysym

attribute:: keysym_num

attribute:: type

attribute:: widget

attribute:: delta

attribute:: user_data

attribute:: detail
