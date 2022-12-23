package eventgraph

import "github.com/cespare/xxhash"

func IDHash(v string) int64 {
	h := xxhash.Sum64String(v)
	return int64(h) & 0x7fffffffffffffff
}
