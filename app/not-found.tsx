"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FiHome, FiAlertTriangle, FiCpu } from "react-icons/fi"

export default function NotFound() {
  const systemLogs = [
    { label: "SYS_STATUS", value: "DEGRADED" },
    { label: "ERROR_CODE", value: "0x404_ROUTE_VOID" },
    { label: "IP_TELEMETRY", value: "RESOLVED_NONE" },
    { label: "STACK_TRACE", value: "Next.js AppRouter Lookup Failure" },
    { label: "ACTION", value: "Redirect Recommended" }
  ]

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center p-4 relative grid-bg-dense">
      {/* Spotlight Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-red-500/5 blur-[90px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="max-w-md w-full glow-card rounded-2xl p-6 border border-[#EAEAEA] bg-white z-10 text-center space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.01),0_2px_8px_rgba(0,0,0,0.015)]"
      >
        {/* Error icon overlay */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-xl bg-[#FDEBEC] border border-[#f3d0d0] flex items-center justify-center">
            <FiAlertTriangle className="text-[#9F2F2D] text-xl animate-pulse" />
          </div>
        </div>

        {/* Display Typography */}
        <div className="space-y-1">
          <h1 className="text-5xl font-extrabold text-[#111111] tracking-tighter">404</h1>
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#787774] font-bold">Route Void Encountered</h2>
        </div>

        <p className="text-xs text-[#2F3437] max-w-xs mx-auto leading-relaxed">
          The requested system node could not be located. The target service or endpoint may have been deprecated or is currently un-routed.
        </p>

        {/* System Logs Telemetry */}
        <div className="rounded-lg border border-[#EAEAEA] bg-[#F7F6F3]/50 p-4 text-left space-y-2">
          <div className="flex items-center gap-2 border-b border-[#EAEAEA] pb-2">
            <FiCpu className="text-[10px] text-[#787774]" />
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#787774] font-bold">System Diagnostics</span>
          </div>

          <div className="space-y-1.5 pt-1.5 font-mono text-[9px]">
            {systemLogs.map((log, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-[#787774]">{log.label}</span>
                <span className={log.label === "SYS_STATUS" || log.label === "ERROR_CODE" ? "text-[#9F2F2D] font-bold" : "text-[#2F3437]"}>
                  {log.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactile Return home button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-mono font-bold text-white bg-[#111111] hover:bg-[#2F3437] active:scale-[0.98] active:translate-y-[0.5px] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <FiHome size={14} />
            <span>[ INITIATE_RETURN_PATH ]</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
