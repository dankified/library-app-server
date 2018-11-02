let secureHeaders = {
  security: [
    { name:  'Cache-Control',
      value: 'public, max-age=30672000'
    },
    { name:   'Strict-Transport-Security',
      value:  'max-age=86400'
    },
    { name:   'X-Content-Type-Options',
      value:  'nosniff'
    },
    { name:   'X-Frame-Options',
      value:  'DENY'
    },
    { name:   'X-Powered-By',
      value:  'The Astronomican'
    },
    { name:   'X-XSS-Protection',
      value:  '1; mode=block'
    },
    { name:   'Content-Security-Policy',
      value:  "default-src 'none'; script-src 'self' https://cdnjs.cloudflare.com connect-src 'self'; img-src 'self' data:; style-src 'self' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; manifest-src 'self'"
    }
  ]
}

module.exports = function(res) {
	secureHeaders.security.forEach(({name, value}) => {
		res.setHeader(name, value);
	})
};