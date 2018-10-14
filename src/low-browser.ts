/**
 * Internet Explorer and Microsoft Edge browsers definition.
 * Parses given user agent string
 *
 * @param userAgent - browser user agent
 *
 * @returns object with info about browser
 */
const lowBrowser = (userAgent: string): LowBrowserData => {
  const data: LowBrowserData = { userAgent }
  let m: RegExpMatchArray | null

  /** Check Mac Power PC */
  if (/Mac_PowerPC/i.test(userAgent)) {
    data.os = 'Mac_PowerPC'
  }

  /** Check Mac OS X */
  if (/Mac OS X/i.test(userAgent)) {
    data.os = 'Mac OS X'
  }

  /** Check Windows OS */
  m = userAgent.match(/(Windows.*?)[;)]/i)
  if (m) {
    data.os = m[1].replace(/^\s+|\s+$/g, '')

    /** Fixes */
    data.os = data.os.replace(/NT(\d)/i, 'NT $1')
    data.os = data.os.replace(/(NT\s\d{1,2})$/i, '$1.0')
  }

  /** Check Trident version core */
  m = userAgent.match(/Trident(\/|\s)(\d+\.(\d+|\w+))[;)]/i)
  if (m) {
    data.core = 'Trident'
    data.coreVersion = m[2].replace(/^\s+|\s+$/g, '')
  }

  /** Check IE 11 */
  if (/rv:11\.0/i.test(userAgent) && data.core === 'Trident') {
    data.name = 'IE'
    data.version = '11.0'
  }

  /** Check IE < 11 */
  const ieRegex = 'MSIE(\\/|\\s)(\\d+\\.(\\d+|\\w+))(;|\\))'
  m = userAgent.match(new RegExp(ieRegex, 'ig'))
  if (m) {
    m = m[m.length - 1].match(new RegExp(ieRegex, 'i'))

    if (m) {
      data.name = 'IE'
      data.version = m[2].replace(/^\s+|\s+$/g, '')
    }
  }

  /** Check IEMobile */
  m = userAgent.match(/IEMobile(\/|\s)(\d+\.(\d+|\w+))[;)]/i)
  if (m) {
    data.name = 'IEMobile'
    data.version = m[2].replace(/^\s+|\s+$/g, '')
  }

  /** Check EDGE browser */
  m = userAgent.match(/Edge(\/|\s)(.*?)\.(\d+)/i)
  if (m) {
    data.name = 'Edge'
    data.version = m[2].replace(/^\s+|\s+$/g, '')
    data.osBuild = +m[3] ? m[3].replace(/^\s+|\s+$/g, '') : undefined
    data.core = 'EdgeHTML'
    data.coreVersion = m[2].replace(/^\s+|\s+$/g, '') + '.' + m[3].replace(/^\s+|\s+$/g, '')
  }

  /** Check Xbox 360 */
  if (/Xbox/i.test(userAgent)) {
    data.gamePlatform = 'Xbox 360'
  }

  /** Check Xbox One */
  if (/Xbox One/i.test(userAgent)) {
    data.gamePlatform = 'Xbox One'
  }

  return data
}

/**
 * Parsed data from given user agent
 */
export interface LowBrowserData {
  /**
   * Input user agent string
   */
  userAgent: string

  /**
   * Browser Name
   */
  name?: 'Edge' | 'IE' | 'IEMobile'

  /**
   * Browser Version
   *
   * @example '8.0'
   */
  version?: string

  /**
   * Browser Core
   */
  core?: 'Trident' | 'EdgeHTML'

  /**
   * Browser Core Version
   *
   * @example '16.16299'
   */
  coreVersion?: string

  /**
   * Operating System
   *
   * @example 'Windows NT 10.0'
   */
  os?: string

  /**
   * Operating System Build Number.
   * Only for Microsoft Edge browser
   *
   * @example '16299'
   */
  osBuild?: string

  /**
   * Game Platforms
   */
  gamePlatform?: 'Xbox 360' | 'Xbox One'
}

export default lowBrowser
