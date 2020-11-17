// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// Maintainers, keep in mind that ES1-style octal literals (`0666`) are not
// allowed in strict mode. Use ES6-style octal literals instead (`0o666`).



declare type flags = {
  'r',//	以读取模式打开文件。如果文件不存在抛出异常。
  'r+',//	以读写模式打开文件。如果文件不存在抛出异常。
  'rs',//	以同步的方式读取文件。
  'rs+',//	以同步的方式读取和写入文件。
  'w',//	以写入模式打开文件，如果文件不存在则创建。
  'wx',//	类似 'w'，但是如果文件路径存在，则文件写入失败。
  'w+',//	以读写模式打开文件，如果文件不存在则创建。
  'wx+',//	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
  'a',//	以追加模式打开文件，如果文件不存在则创建。
  'ax',//	类似 'a'， 但是如果文件路径存在，则文件追加失败。
  'a+',//	以读取追加模式打开文件，如果文件不存在则创建。
  'ax+',//	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
}

declare type modes={
  S_IFIFO,
  S_IFLNK,
  S_IFMT,
  S_IFREG,
  S_IFSOCK,
  F_OK,
  R_OK,
  W_OK,
  X_OK,
  O_WRONLY,
  O_SYMLINK
}
declare class fs {
  static appendFile(path, data, options, callback)
  static appendFileSync(path, data, options)
  static access(path, mode, callback)
  static accessSync(path, mode)
  static chown(path, uid, gid, callback)
  static chownSync(path, uid, gid)
  static chmod(path, mode, callback)
  static chmodSync(path, mode)
  static close(fd, callback)
  static closeSync(fd)
  static copyFile(src, dest, flags, callback)
  static copyFileSync(src, dest, flags)
  static createReadStream(path, options)
  static createWriteStream(path, options)
  static exists(path, callback)
  static existsSync(path)
  static fchown(fd, uid, gid, callback)
  static fchownSync(fd, uid, gid)
  static fchmod(fd, mode, callback)
  static fchmodSync(fd, mode)
  static fdatasync(fd, callback)
  static fdatasyncSync(fd)
  static fstat(fd, options, callback)
  static fstatSync(fd, options = {})
  static fsync(fd, callback)
  static fsyncSync(fd) 
  static ftruncate(fd, len = 0, callback)
  static ftruncateSync(fd, len = 0)
  static futimes(fd, atime, mtime, callback)
  static futimesSync(fd, atime, mtime)
  static lchown(path, uid, gid, callback)
  static lchownSync(path, uid, gid)
  static lchmod(path, mode, callback)
  static lchmodSync(path, mode)
  static link(existingPath, newPath, callback)
  static linkSync(existingPath, newPath)
  static lstat(path, options, callback)
  static lstatSync(path, options = {})
  static mkdir(path, options, callback)
  static mkdir(path, callback)
  static mkdirSync(path, options) 
  static mkdtemp(prefix, options, callback)
  static mkdtempSync(prefix, options) 
  static open(path, flags, mode, callback:(err,data)=>void)
  static open(path, flags, callback:(err,data)=>void)
  static openSync(path, flags, mode) 
  static readdir(path, options, callback) 
  static readdirSync(path, options)
  static read(fd, buffer, offset, length, position, callback)
  static readSync(fd, buffer, offset, length, position)
  static readFile(path, options, callback)
  static readFileSync(path, options?) 
  static readlink(path, options, callback)
  static readlinkSync(path, options)
 
  static rename(oldPath, newPath, callback)
  static renameSync(oldPath, newPath)
  static rmdir(path, callback)
  static rmdirSync(path)
  static stat(path, options, callback)
  static statSync(path, options = {}) 
  static symlink(target, path, type_, callback_) 
  static symlinkSync(target, path, type)
  static truncate(path, len, callback)
  static truncateSync(path, len)
  static unwatchFile(filename, listener)
  static unlink(path, callback) 
  static unlinkSync(path)
  static utimes(path, atime, mtime, callback)
  static utimesSync(path, atime, mtime)
  static watch(filename, options, listener)
  static watchFile(filename, options, listener)
  static writeFile(path, data,callback:(err, data)=>void)
  static writeFile(path, data, options, callback)
  static writeFileSync(path, data, options?)
  static write(fd, buffer, offset, length, position, callback)
  static writeSync(fd, buffer, offset, length, position)
  static Dirent
  static Stats
  static realpath
  static realpathSync
  static ReadStream 
  static WriteStream;
  static FileReadStream;
  static FileWriteStream

}