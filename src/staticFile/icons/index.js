


const requireAll = requireContext => requireContext.keys().map(requireContext)

console.log(requireAll)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

