'use strict';

/* Filters */

angular.module('Filters', [])

.filter('first_sentence', function() {
	return function(data) {
		return data ? data.substring(0, Math.min(data.indexOf('.'), 50)) : null
	}
})

.filter('last_sentence', function() {
	return function(data) {
		return data ? data.substring(
				Math.max(
						data.substring(0, data.length-1).lastIndexOf('.') + 1,
						data.length - 50),
			data.length) : null
	}
})


.filter('date_ago', function() {
	return function(data) {
	    var seconds = Math.floor((new Date() - new Date(data)) / 1000),
	    	interval = Math.floor(seconds / 31536000),
	    	result = ''
	    if (interval > 1)
	        result += interval + " years"
	    interval = Math.floor(seconds / 2592000)
	    if (interval > 1)
	        result += ', ' + interval + " months"
	    interval = Math.floor(seconds / 86400)
	    if (interval > 1)
	        result += ', ' + interval + " days"
	    interval = Math.floor(seconds / 3600)
	    if (interval > 1)
	        result += ', ' + interval + " hours"
	    if (result)
	    	result += ' ago'
		return result 
	}
})



