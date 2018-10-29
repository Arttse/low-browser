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
    data.os = m[1].trim()
      .replace(/NT(\d)/i, 'NT $1')
      .replace(/(NT\s\d{1,2})$/i, '$1.0')
  }

  /** Check Trident version core */
  m = userAgent.match(/Trident[\/\s](\d+\.[\d\w]+)[;)]/i)
  if (m) {
    data.core = 'Trident'
    data.coreVersion = m[1].trim()
  }

  /** Check IE 11 */
  if (/rv:11\.0/i.test(userAgent) && data.core === 'Trident') {
    data.name = 'IE'
    data.version = '11.0'
  }

  /** Check IE < 11 */
  const ieRegex = 'MSIE\\s(.*?)[;)]'
  m = userAgent.match(new RegExp(ieRegex, 'ig'))
  m = m ? m[m.length - 1].match(new RegExp(ieRegex, 'i')) : null
  if (m) {
    data.name = 'IE'
    data.version = m[1].trim()
  }

  /** Check IEMobile */
  m = userAgent.match(/IEMobile[\/\s](\d+\.[\d\w]+)[;)]/i)
  if (m) {
    data.name = 'IEMobile'
    data.version = m[1].trim()
  }

  /** Check EDGE browser */
  m = userAgent.match(/Edge[\/\s](.*?)\.(\d+)/i)
  if (m) {
    data.name = 'Edge'
    data.version = m[1].trim()

    const osBuild = +m[2]
    if (osBuild) {
      data.osBuild = osBuild
    }

    data.core = 'EdgeHTML'
    data.coreVersion = `${data.version}.${osBuild || 0}`
  }

  /** Check Xbox */
  if (/Xbox/i.test(userAgent)) {
    data.gamePlatform = /Xbox\sOne/i.test(userAgent)
      ? 'Xbox One'
      : 'Xbox 360'
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
   * @example '5.5b1'
   */
  version?: string

  /**
   * Browser Core
   */
  core?: 'EdgeHTML' | 'Trident'

  /**
   * Browser Core Version
   *
   * @example '4.0b1'
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
   * @example 16299
   */
  osBuild?: number

  /**
   * Game Platforms
   */
  gamePlatform?: 'Xbox 360' | 'Xbox One'
}

export default lowBrowser
