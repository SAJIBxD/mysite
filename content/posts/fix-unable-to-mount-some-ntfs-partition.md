---
title: "Fix Unable to Mount Some Ntfs Partition"
date: 2025-03-02T19:09:35+06:00
tags: [linux, tools]
---

Recently udisks (which is the daemon dolphin uses in the background to mount the disk) has changed it's defaults from the older ntfs-3g implementation to the newer ntfs3 driver in the kernel. Said driver is less lenient when there's a ntfs disk corruption present of some sort. The best way to fix this would be to run a chkdsk from Windows to make sure there aren't any filesystem inconsistencies.

```sh
chkdsk /f /r
```

If that's not an option, you can ignore the corruption that prevents ntfs3 from mounting the disk by either mounting it with the "force" command or using

```sh
ntfsfix -d /dev/sdXY
```

where /dev/sdXY is the device node of the partition

see: https://bbs.archlinux.org/viewtopic.php?id=291894
