function indexOf( haystack, needle, offset ) {

  offset = offset || 0

  var nlen = needle.length
  var hlen = haystack.length - offset

  if( nlen <= 0 || hlen <= 0 )
    return -1
  
  if( offset + nlen > haystack.length )
    return -1
  
  var last = nlen - 1
  var scan = 0
  var skip = {}
  var jump
  
  for( scan = 0; scan < last; scan++ ) {
    skip[ needle[ scan ] ] = last - scan
  }

  while( hlen >= nlen ) {
    for( scan = last; haystack[ offset + scan ] === needle[ scan ]; scan-- ) {
      if( scan === 0 ) { return offset }
    }
    jump = skip[ haystack[ offset + last ] ]
    jump = jump != null ? jump : nlen
    hlen -= jump
    offset += jump
  }

  return -1

}

module.exports.indexOf = indexOf
