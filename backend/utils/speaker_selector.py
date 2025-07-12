def get_default_speaker(language_code: str) -> str:
    speaker_map = {
        "en-IN": "anushka",
        "hi-IN": "amol",
        "mr-IN": "manisha",
        "ta-IN": "maya",
        "bn-IN": "abhilash",
        "te-IN": "vian",
        "gu-IN": "karun",
        "ml-IN": "maitreyi",
        "kn-IN": "arvind",
        "pa-IN": "arya",
        "od-IN": "vidya"
    }

    selected = speaker_map.get(language_code, "anushka")
    print(f"🔍 [DEBUG] Speaker for '{language_code}' → '{selected}'")
    return selected

