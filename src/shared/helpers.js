/* eslint no-console: ["error", { allow: ["error"] }] */
import memoize from 'fast-memoize'
import fetch from 'unfetch'
import { updateConvertTime, setDummyPlanOptions } from './actions'
/* eslint-disable no-unused-vars */
let sharedPlanOptionsUrl = ''
/* eslint-enable no-unused-vars */

if (process.env.NODE_ENV === 'production') {
  sharedPlanOptionsUrl = '/dummy-plans-setup.js'
} else {
  sharedPlanOptionsUrl = '/dummy-plans-setup.js'
}

export function getTheTime(time) {
  return time
}

// Get current date and pass another component

export const getTheDate = memoize(
  () => {

  	let today = new Date()
	let dd = today.getDate()
	let mm = today.getMonth()+1
	const yyyy = today.getFullYear()
	if(dd<10) {
	    dd = `0${dd}`
	} 

	if(mm<10) {
	    mm = `0${mm}`
	} 

	today = `${mm}/${dd}/${yyyy}`
    return today
  }
)

// Get current time and pass to Redux

export const getConvertedTime = memoize(
  (dispatch) => {
  	const d = new Date()
	const hr = d.getHours()
	const min = d.getMinutes()
	const sec = d.getSeconds()

	const fullTime = `${hr}:${min}:${sec}`
  	dispatch(updateConvertTime(fullTime))
    return fullTime
  }
)

// Get data from JSON and pass to Redux

export function getDummyPlanOptions(dispatch, second) {
  return fetch(sharedPlanOptionsUrl)
    .then(r => r.json())
    .then(data => {

      if (data.first && data.second) {
        dispatch(
          setDummyPlanOptions(
            data[second ? 'second' : 'first'].dummyPlanOptions
          )
        )
        return Promise.resolve()
      }

      return Promise.reject()
    })
    .catch(error => {
      console.error(error)

      return null
    })
}



