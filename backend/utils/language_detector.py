from langdetect import detect_langs

def fallback_language_detection(text: str, sarvam_lang: str, fallback: str = "en-IN") -> str:
    try:
        if sarvam_lang != "en-IN":
            return sarvam_lang

        results = detect_langs(text)
        lang_probs = {r.lang: r.prob for r in results}

        if "hi" in lang_probs and lang_probs["hi"] > 0.4:
            return "hi-IN"
        elif "mr" in lang_probs and lang_probs["mr"] > 0.4:
            return "mr-IN"
        elif "ta" in lang_probs and lang_probs["ta"] > 0.4:
            return "ta-IN"
        elif "bn" in lang_probs and lang_probs["bn"] > 0.4:
            return "bn-IN"
        elif "te" in lang_probs and lang_probs["te"] > 0.4:
            return "te-IN"
        elif "gu" in lang_probs and lang_probs["gu"] > 0.4:
            return "gu-IN"
        elif "kn" in lang_probs and lang_probs["kn"] > 0.4:
            return "kn-IN"
        return fallback
    except Exception:
        return fallback
