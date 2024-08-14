// OPERATORS

x += 5;
x = x + 5;

x -= 5;
x = x - 5;

x *= 5;
x = x * 5;

x /= 5;
x = x / 5;

x %= 5;
x = x % 5;

x **= 5;
x = x ** 5;

x <<= 5;
x = x << 5;

x >>= 5;
x = x >> 5;

x >>>= 5;
x = x >>> 5;

x &= 5;
x = x & 5;

x |= 5;
x = x | 5;

x ^= 5;
x = x ^ 5;

x &&= 5;
x = x && 5;

x ||= 5;
x = x || 5;

x ??= 5;
x = x ?? 5;

"hello" + " world"; // "hello world"

"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"

123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false

const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"

const name = o && o.getName();
