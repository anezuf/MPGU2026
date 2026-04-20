export function isMobileTouchDevice() {
  if (typeof window === 'undefined') {
    return false
  }

  const { userAgent, userAgentData, platform, maxTouchPoints } = window.navigator
  const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent)
  const isTouchTablet = platform === 'MacIntel' && maxTouchPoints > 1
  const hasCoarsePointer = window.matchMedia?.('(pointer: coarse)').matches ?? false

  return Boolean(userAgentData?.mobile || isMobileUserAgent || isTouchTablet || hasCoarsePointer)
}
