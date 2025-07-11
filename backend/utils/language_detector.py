from langdetect import detect_langs

def detect_dominant_language(text: str, fallback: str = "en-IN") -> str:
    try:
        results = detect_langs(text)
        lang_probs = {r.lang: r.prob for r in results}

        if "mr" in lang_probs and lang_probs["mr"] > 0.5:
            return "mr-IN"
        elif "hi" in lang_probs and lang_probs["hi"] > 0.5:
            return "hi-IN"
        elif "en" in lang_probs and lang_probs["en"] > 0.5:
            return "en-IN"
        elif "ta" in lang_probs and lang_probs["ta"] > 0.5:
            return "ta-IN"
        elif "bn" in lang_probs and lang_probs["bn"] > 0.5:
            return "bn-IN"
        elif "te" in lang_probs and lang_probs["te"] > 0.5:
            return "te-IN"
        else:
            return fallback
    except Exception:
        return fallback
